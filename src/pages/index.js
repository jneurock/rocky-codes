import Intro from '../components/intro';
import LatestThoughts from '../components/thoughts/latest';
import Layout from '../components/layout';
import FeaturedProjects from '../components/featured-projects';
import React from 'react';
import projects from '../fixtures/projects';
import { graphql } from 'gatsby';

export default function Index({ data }) {
  const { allMarkdownRemark: { edges: thoughts } } = data;

  return (
    <Layout>
      <Intro />
      <LatestThoughts thoughts={thoughts} />
      <FeaturedProjects projects={projects} />
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
