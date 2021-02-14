import ContentMeta from '../components/content-meta';
import Page from '../components/page';
import React from 'react';
import { graphql } from 'gatsby';

export default function About({ data }) {
  const { markdownRemark: { fields, frontmatter: { title }, html } } = data;
  const metaComponent = <ContentMeta readTime={fields.readingTime.text} />;

  return (
    <Page
      className="my-approach"
      html={html}
      preHeading={metaComponent}
      title={title}
    />
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
