import Layout from '../components/layout';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Page({ children, html, title }) {
  return (
    <Layout>
      <Helmet title={`rocky.codes - ${title}`} />
      <h2 class="page__heading">
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
