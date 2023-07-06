import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { IFrontMatter, IPOST } from "@/types/post.types";

export const getDirPosts = (category: string): IPOST[] => {
  const folderPath = join(process.cwd(), "posts", category);
  const postPath = readdirSync(folderPath).filter((post) =>
    /\.mdx?$/.test(post)
  );

  const dirposts: IPOST[] = postPath.map((post) => {
    const source = readFileSync(join(folderPath, post), "utf8");
    const { data, content } = matter(source);
    const newData: IFrontMatter = { ...data };

    const frontMatter: IFrontMatter = {
      dirName: newData.dirName,
      contentNo: newData.contentNo,
      mainCategory: newData.mainCategory,
      tag: newData.tag,
      title: newData.title,
      updated: newData.updated,
      image: newData.image,
      isFeatured: newData.isFeatured,
    };

    return {
      frontMatter,
      slug: post.replace(/\d{4}-\d{4}-/, "").replace(".mdx", ""),
      fullPath: `/${newData.dirName}/${post.replace(".mdx", "")}`,
      content,
    };
  });

  return dirposts.filter((post) => post.frontMatter.isFeatured === true);
};
