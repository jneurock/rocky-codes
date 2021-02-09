import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { markdownRemark: thought, site: { siteMetadata } } = data;
  const { excerpt: description, frontmatter: { title } } = thought;

  return (
    <Layout meta={{ description, siteMetadata, title, type: 'article' }}>
      <article className="thought">
        <h2 className="thought-title">
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
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
      html
    }
    site {
      siteMetadata {
        description
        image
        siteUrl
        title
        twitterCreator
      }
    }
  }
`;
