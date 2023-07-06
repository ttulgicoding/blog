import { serialize } from "next-mdx-remote/serialize";
import { ISlug } from "@/types/post.types";
import { getAllDirPosts } from "@/util/getAllDirPosts";
import remarkUnwrapImages from "remark-unwrap-images";

export const getPost = async (slug: string): Promise<ISlug> => {
  const posts = getAllDirPosts().filter((post) => post.slug === slug);

  const { frontMatter, content, slug: postSlug } = posts[0];

  const postSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [],
    },
  });

  return {
    frontMatter,
    source: postSource,
    slug: postSlug,
  };
};
