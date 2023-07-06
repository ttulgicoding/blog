import React from 'react';
import { Aside } from "./layout/Aside";
import { Main } from "./layout/Main";
import { IAppLayoutProps, IMetaData } from '@/types/site.types';
import { useRouter } from 'next/router';
import { Meta } from './layout/Meta';

export const AppLayout = ({
    children, title, description, keywords, author, image, updated, tags, type, section,
  }: IAppLayoutProps) => {

    const { asPath, } = useRouter();

    const meta: IMetaData = {
        title,
        url: asPath,
        description,
        keywords,
        author,
        image,
        tags,
        type,
        section,
        updated,
      };

    return(
        <>
        <Meta meta={meta} />
        <Aside/>
        <Main>{children}</Main>
        </>
    );
}