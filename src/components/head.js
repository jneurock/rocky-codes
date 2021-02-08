import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ meta }) {
  const {
    description,
    image,
    siteMetadata,
    title,
    twitterCreator,
    type
  } = meta;
  const imageSrc = `${siteMetadata.siteUrl}/${image || siteMetadata.image}`;
  const pageTitle = title
    ? `${siteMetadata.title} - ${title}`
    : siteMetadata.title;
  const pageDescription = (
    description || siteMetadata.description
  ).replace(/\n/g, '');

  return (
    <Helmet>
      <title>
        {pageTitle}
      </title>
      <meta property="description" content={pageDescription} />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:title" content={title || siteMetadata.title} />
      <meta property="og:type" content={type || 'website'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={twitterCreator || siteMetadata.twitterCreator}
      />
    </Helmet>
  );
}
