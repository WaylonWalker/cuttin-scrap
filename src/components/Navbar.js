import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav>
        <Link to="/" alt='cuttin-scrap' className="navbar-item">
          <figure className="image">
            < img src = '/img/cuttinscrap_w_150.png'
            alt = "cuttin-scrap"
            />
          </figure>
        </Link>
        <ul>
          <li>
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </li>
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
              Blog
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
        </ul>
        
  </nav>
)

export default Navbar
