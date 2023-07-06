import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
    dirName?: string;
    contentNo?: number;
    mainCategory?: string;
    tag?: string[];
    title?: string;
    updated?: string;
    image?: string;
    isFeatured?: boolean;
  }
 
export interface IPOST {
  frontMatter?: IFrontMatter;
  slug?: string;
  fullPath?: string;
  content?: string;
}

export interface ISlug {
  frontMatter: IFrontMatter;
  source: MDXRemoteSerializeResult;
  slug: string;
}
