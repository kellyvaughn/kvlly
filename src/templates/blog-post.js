import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={`Kelly Vaughn &mdash; ${post.frontmatter.title}`} />
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="siteHeader">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
