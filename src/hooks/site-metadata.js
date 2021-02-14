import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMeta() {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query SiteMetaData {
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
    `
  );

  return siteMetadata;
}
