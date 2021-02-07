import Page from '../components/page';
import React from 'react';
import { graphql } from 'gatsby';

export default function About({ data }) {
  const { markdownRemark: page } = data;

  return (
    <Page html={page.html} title={page.frontmatter.title}>
      Hello, world!
    </Page>
  );
}

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { path: { eq: "/approach" } }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
      html
    }
  }
`;
