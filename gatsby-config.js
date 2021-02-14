module.exports = {
  siteMetadata: {
    author: 'Rocky Neurock',
    description: 'My name is Rocky. I built this site so I could share thoughts about software engineering and leadership, write about my own personal approach and share my projects.',
    image: 'images/media-card.png',
    siteUrl: 'https://rocky.codes',
    title: 'rocky.codes',
    twitterCreator: '@rockyneurock'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-optimize-svgs',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-reading-time',
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
              extensions: [
                `${__dirname}/node_modules/night-owl/package.json`
              ],
              inlineCode: {
                marker: '•'
              },
              theme: {
                default: 'Night Owl Light',
                parentSelector: {
                  'html[data-color-mode=dark]': 'Night Owl'
                }
              }
            }
          }
        ]
      }
    }
  ]
};
