import Layout from '../components/layout';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { markdownRemark: thought } = data;

  return (
    <Layout>
      <Helmet title={`rocky.codes - ${thought.frontmatter.title}`} />
      <article>
        <h2 class="thought-title">
          {thought.frontmatter.title}
        </h2>
        <section dangerouslySetInnerHTML={{ __html: thought.html }} />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ThoughtByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
      html
    }
  }
`;
