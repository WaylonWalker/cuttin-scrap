import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GivingBackPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
            <div  className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <form name='giving-back' method="POST" netlify>
                <p>
                  <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label> Message: <textarea name="message"></textarea></label>
                </p>
                <button type="submit">Send</button>
              </form>
      </div>
    </section>
  )
}

GivingBackPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GivingBackPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GivingBackPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

GivingBackPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GivingBackPage

export const aboutPageQuery = graphql`
  query GivingBackPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
