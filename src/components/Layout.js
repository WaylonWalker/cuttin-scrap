import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div id='content'>{children}</div>
  </>
)

export default TemplateWrapper
