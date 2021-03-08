import Page from '../components/page';
import React from 'react';
import ThoughtPreview from '../components/thoughts/preview';
import { graphql } from 'gatsby';

export default function Thoughts({ data }) {
  const { allMarkdownRemark: { edges: thoughts } } = data;

  return (
    <Page title="Thoughts">
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
      limit: 10,
      sort: { order: DESC, fields: [frontmatter___date] },
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            excerpt
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
  }
`;
