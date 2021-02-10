import FontLoader from './font-loader';
import React from 'react';
import useSiteMeta from '../hooks/site-metadata';
import { Helmet } from 'react-helmet';

export default function Head({ meta = {} }) {
  const { description, image, title, twitterCreator, type } = meta;
  const siteMeta = useSiteMeta();
  const imageSrc = `${siteMeta.siteUrl}/${image || siteMeta.image}`;
  const pageTitle = title ? `${siteMeta.title} - ${title}` : siteMeta.title;
  const pageDescription = (description || siteMeta.description)
    .replace(/\n/g, '');

  return (
    <>
      <Helmet>
        <title>
          {pageTitle}
        </title>
        <meta property="description" content={pageDescription} />
        <meta property="og:image" content={imageSrc} />
        <meta property="og:title" content={title || siteMeta.title} />
        <meta property="og:type" content={type || 'website'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={twitterCreator || siteMeta.twitterCreator}
        />
      </Helmet>
      <FontLoader />
    </>
  );
}
