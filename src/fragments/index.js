import { graphql } from "gatsby"

export const siteFragment = graphql`
  fragment SiteFragment on Query {
    site {
      siteMetadata {
        siteUrl
        title
        author
        description
        disqusShortName
        facebookAppId
        twitterUser
        social {
          githubUrl
          keybaseUrl
          linkedInUrl
          twitterUrl
        }
      }
    }
  }
`;

export const markdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatterFragment on MarkdownRemark {
    id
    frontmatter {
      title
      tags
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

export const markdownFrontmatterWithCoverFragment = graphql`
  fragment MarkdownFrontmatterWithCoverFragment on MarkdownRemark {
    id
    frontmatter {
      title
      excerpt
      date(formatString: "MMMM DD, YYYY")
      cover {
        childImageSharp {
          sizes(maxWidth: 800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;

export const markdownMetadataFragment = graphql`
  fragment MarkdownMetadataFragment on MarkdownRemark {
    fields {
      slug
    }
    html
    excerpt
    timeToRead
  }
`;
