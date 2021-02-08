import Layout from '../components/layout';
import React from 'react';

export default function Page({ children, html, meta, title }) {
  return (
    <Layout meta={{ ...meta, title }}>
      <h2 className="page__heading">
        {title}
      </h2>
      {children}
      {
        html
          ? <section dangerouslySetInnerHTML={{ __html: html }} />
          : <></>
      }
    </Layout>
  );
}
