import React, { Component } from 'react'
import { Link } from 'gatsby'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.nav_open = this.nav_open.bind(this);
    this.state = {
      active: false
    }
  };

  nav_open() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <nav>
        <Link to="/" alt='cuttin-scrap' className="navbar-item">
          <figure className="logo">
            < img src='/img/cuttinscrap_w_150.png'
              alt="cuttin-scrap"
            />
          </figure>
        </Link>
        <button
          id="ham-open"
          // className={this.state.active ? 'open' : 'closed'}
          onClick={this.nav_open}
        >
          ☰
        </button>
        <ul className={this.state.active ? 'open' : 'closed'}>
          <li>
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/project">
              Projects
            </Link>
          </li>
          <li>
            <a href="https://anchor.fm/onebreathatatime">Podcast</a>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          {/* <li>
            <Link className="navbar-item" to="/giving-back">
              Giving Back
            </Link>
          </li> */}
          {/* <li>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </li> */}
        </ul>

      </nav >

    )
  }
}

