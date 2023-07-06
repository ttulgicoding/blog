import Head from 'next/head';
import { IMetaData } from '@/types/site.types';
import { siteData } from '@/data/config.data';

interface IMetaProps {
  meta: IMetaData;
}

export const Meta = ({ meta, }: IMetaProps) => {
  const {
    title, url, description, keywords, author,
    // eslint-disable-next-line no-unused-vars
    image, type, tags, section, updated,
  } = meta;

  const siteTitle = `${title} - ${siteData.title}`;
  const siteDescription = description || siteData.description;
  const siteURL = `${siteData.url}${url}`;
  const siteKeywords = keywords || siteData.keywords;
  const siteImage = image || `${siteData.url}${siteData.image}`;
  const siteType = type || siteData.type;

  return (
    <>
      <Head>
        <meta property='og:site_name' content={siteData.title} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:type' content={siteType} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={siteImage} />
        <meta property='og:url' content={siteURL} />
        <meta property='og:locale' content='ko_KR' />

        {siteType === 'article' && (
          <>
            <meta property='article:section' content={meta.section} />
            <meta property='article:tag' content={meta.tags} />
            <meta property='article:author' content={author} />
            <meta property='article:published_time' content={meta.updated} />
          </>
        )}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={`@${author}`} />
        <meta name='twitter:creator' content={`@${author}`} />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:description' content={siteDescription} />
        <meta name='twitter:image' content={siteImage} />

        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta name='generator' content='MS Visual Studio Code' />
        <meta name='author' content={author} />
        <link rel='canonical' href={siteURL} />

        <title>{siteTitle}</title>
      </Head>
    </>
  );
}
