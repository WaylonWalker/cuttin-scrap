import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './sass/main.sass'

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet 
      title="Home | Gatsby + Netlify CMS" 
    >
      <meta name="twitter:site" content="@cuttinscrap" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="CuttinScrap" />
      < meta name = "theme-color"
      content = "#0494B1"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <html lang='en' />
    </Helmet>

    <Navbar />
    <div id='content'>{children}</div>
  </>
)

export default TemplateWrapper
