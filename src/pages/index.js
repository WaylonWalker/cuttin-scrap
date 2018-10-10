import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectGallery from "../components/ProjectGallery";
import BlogGallery from "../components/BlogGallery";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { projects, blogs } = data

    return (
      <Layout>
        <div className="hero" />
        <ProjectGallery posts={projects.edges} />
        <BlogGallery posts={blogs.edges} />
      </Layout>
    );
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array
//     })
//   })
// };

export const pageQuery = graphql`
  query ProjectPageQuery {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
      limit: 10
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
  
      blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 10
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
`;
