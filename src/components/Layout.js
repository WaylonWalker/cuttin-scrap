import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './sass/main.sass'

const TemplateWrapper = ({ children, site_name, title, theme_color, description, keywords, image, url, card, fb_app_id, twitter, time, author, type }) => (
  <>
    <Helmet
      title="CuttinScrap"
    >
      <html lang='en' />
      <meta name="description" content={description} />

      <meta property="og:site_name" content={site_name} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta property="article:published_time" content={time} />
      <meta property="article:modified_time" content={time} />

      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />

      <meta name="twitter:card" content={card} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:text:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:image:src" content={image} />

      <meta property="fb:admins" content={fb_app_id} />

      <meta name="theme-color" content={theme_color} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta name="google-site-verification" content="56f808442edb403cb993e5d0da778344" />
      <meta name="p:domain_verify" content="56f808442edb403cb993e5d0da778344" />
    </Helmet>

    <Navbar />
    <div id='content'>{children}</div>

    <Footer />
  </>
)

TemplateWrapper.defaultProps = {
  site_name: 'Cuttin Scrap',
  title: "Lets Start Cuttin Scrap",
  theme_color: "#0494B1",
  description: "When crafting from the heart, perfection is not the main goal. Here at Cuttin Scrap I push towards having fun and using what you have around the house. These projects are not meant for Muffy McPerfect Pants, but for the everyday crafter. I, Rhiannon Walker, fight Atypical Carcinoid Cancer of the lungs everyday, and use crafting as my way to let loose. Come on a journey with me, where the road is never straigh",
  keywords: "YouTube,  Blog, Quilting, Quilts, Sewing",
  image: "https://www.cuttinscrap.com/img/cuttinscrap_w_150.png",
  url: "https://www.cuttinscrap.com",
  card: "summary",
  fb_app_id: 'NA',
  twitter: '@cuttinscrap',
  time: "",
  author: "Rhiannon Walker",
  type: "blog",
}
export default TemplateWrapper
