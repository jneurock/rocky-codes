import Layout from '../components/layout';
import React from 'react';

export default function Page({ children, className, html, preHeading, title }) {
  return (
    <Layout className={className} meta={{ title }}>
      {preHeading}
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
