module.exports = {
  siteMetadata: {
    author: 'Rocky Neurock',
    title: 'rocky.codes'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              inlineCode: {
                marker: '•'
              },
              theme: {
                default: 'Light (Visual Studio)',
                parentSelector: {
                  'html[data-theme=dark]': 'Monokai'
                }
              }
            }
          }
        ]
      }
    }
  ]
}
