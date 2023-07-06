import { getAllDirPosts } from '@/util/getAllDirPosts';

export const getCategoryPosts = (category: string) => {
  return getAllDirPosts()
    .filter(({ frontMatter, }) => frontMatter.mainCategory === category)
    .sort((a, b) => {
      const beforeDate = a.frontMatter.contentNo;
      const afterDate = b.frontMatter.contentNo;

      return afterDate - beforeDate;
    });
};
