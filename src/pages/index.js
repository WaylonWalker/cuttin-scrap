import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="projectGallery">
            {posts
              .map(({ node: post }) => (
                <div
                  className="projectThumbnail"
                  key={post.id}
                >
                  <img src={post.frontmatter.thumbnailImage} alt={post.frontmatter.title}/>
                  <Link className="projectOverlay" to={post.fields.slug}>
                      <h2>{post.frontmatter.title}</h2>
                  </Link>
                </div>
              ))}
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "project-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            thumbnailImage
          }
        }
      }
    }
  }
`
