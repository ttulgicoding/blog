import { IPOST } from '@/types/post.types';
import { getDir } from '@/util/getDir';
import { getDirPosts } from '@/util/getDirPosts';

const dirs = getDir();

export const getAllDirPosts = () => {
  let posts: IPOST[] = [];

  for (const dir in dirs) {
    if (Object.prototype.hasOwnProperty.call(dirs, dir)) {
      posts = posts.concat(getDirPosts(dirs[dir]));
    }
  }

  posts = posts.sort((a, b) => {
    const beforeNum = a.frontMatter.contentNo;
    const afterNum = b.frontMatter.contentNo;

    return afterNum - beforeNum;
  });

  return posts;
};
