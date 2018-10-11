import React from 'react'
import { FaYoutube, FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa'

export default () => (
  <div id="social">
    <a href="https://www.youtube.com/channel/UCg7ZCfygUJMoMC6AcfIaH1A" title="youtube">
      <FaYoutube />
    </a>
    <a href="https://www.instagram.com/cuttin.scrap/" title="instagram">
      <FaInstagram />
    </a>
    <a
      href="https://pl.pinterest.com/cuttinscrap/"
      title='pinterest'>
      <FaPinterest />
    </a>
    <a
      href="mailto:cuttin.scrap@gmail.com"
      title='email'> <FaEnvelope /> </a>
  </div>
)
