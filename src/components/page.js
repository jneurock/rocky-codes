import Layout from '../components/layout';
import React from 'react';

export default function Page({ children, className, html, title }) {
  return (
    <Layout className={className} meta={{ title }}>
      {children}
      <h2 className="page__heading">
        {title}
      </h2>
      {
        html
          ? <section dangerouslySetInnerHTML={{ __html: html }} />
          : <></>
      }
    </Layout>
  );
}
