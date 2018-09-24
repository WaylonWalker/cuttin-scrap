import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav>
        <Link to="/" className="navbar-item">
          <figure className="image">
            < img src = 'https://res.cloudinary.com/cuttin-scrap/image/upload/c_scale,w_150/v153753233/logo/cuttinscrap.png'
            alt = "cuttin-scrap"
            />
          </figure>
        </Link>
        <ul>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/project">
              Projects
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              blog
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/giving-back">
              Giving Back
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/style-guide">
              Style Guide
            </Link>
          </li>
        </ul>
        
  </nav>
)

export default Navbar
