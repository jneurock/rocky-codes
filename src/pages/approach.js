import ContentMeta from '../components/content-meta';
import Page from '../components/page';
import React from 'react';
import { graphql } from 'gatsby';

export default function About({ data }) {
  const { markdownRemark: { fields, frontmatter: { title }, html } } = data;

  return (
    <Page className="my-approach" html={html} title={title}>
      <ContentMeta readTime={fields.readingTime.text} />
    </Page>
  );
}

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { path: { eq: "/approach" } }) {
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
