import ContentMeta from '../components/content-meta';
import Layout from '../components/layout';
import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { markdownRemark: thought } = data;
  const { excerpt: description, fields, frontmatter } = thought;
  const { title } = frontmatter;

  return (
    <Layout meta={{ description, title, type: 'article' }}>
      <article>
        <ContentMeta
          date={frontmatter.date}
          readTime={fields.readingTime.text}
        />
        <h2 className="thought-title">
          {title}
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
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
      html
    }
  }
`;
