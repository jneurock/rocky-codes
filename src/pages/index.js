import Intro from '../components/intro';
import LatestThoughts from '../components/thoughts/latest';
import Layout from '../components/layout';
import Projects from '../components/projects';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default function Index({ data }) {
  const { edges: thoughts } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title="rocky.codes" />
      <Intro />
      <LatestThoughts thoughts={thoughts} />
      <Projects />
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^\/thoughts/" } } },
      limit: 3,
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
          }
        }
      }
    }
  }
`;
