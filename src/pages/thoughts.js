import Page from '../components/page';
import React from 'react';
import ThoughtPreview from '../components/thoughts/preview';
import { graphql } from 'gatsby';

export default function Thoughts({ data }) {
  const {
    allMarkdownRemark: { edges: thoughts },
    site: { siteMetadata }
  } = data;

  return (
    <Page meta={{ siteMetadata }} title="Thoughts">
      <section>
        {
          thoughts.map(function({ node: thought })  {
            return (
              <ThoughtPreview content={thought} key={thought.id} />
            );
          })
        }
      </section>
    </Page>
  );
}

export const pageQuery = graphql`
  query ThoughtsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^\/thoughts/" } } },
      limit: 6,
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
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
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
