const path = require('path');

const THOUGHT_COMPONENT = path.resolve('src/templates/thought.js');
const THOUGHTS_QUERY = `
  {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^\/thoughts/" } } }
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`;

exports.createPages = async function({ actions, graphql, reporter }) {
  const { createPage } = actions;
  
  const result = await graphql(THOUGHTS_QUERY);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  
  result.data.allMarkdownRemark.edges.forEach(function({ node }) {
    createPage({
      component: THOUGHT_COMPONENT,
      path: node.frontmatter.path
    });
  });
};
