import React, { Component } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
var Scroll = require('react-scroll')

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
  }
  contactMe() {
    scroller.scrollTo('contactMe', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  home() {
    scroller.scrollTo('home', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  about() {
    scroller.scrollTo('about', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  portofolio() {
    scroller.scrollTo('portofolio', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  services() {
    scroller.scrollTo('services', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  timeline() {
    scroller.scrollTo('timeline', {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  handleSetActive(to) {
    console.log(to)
    return true
  }
  handleSetInactive(to) {
    console.log(to)
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY < 64
      if (scrollTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }
  render() {
    const { scrolled } = this.state
    return (
      <div className={`navContainer ${scrolled ? 'activeNav' : null}`}>
        <p className="logo">Tony Hajdini</p>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              activeClass="active"
              onClick={this.home}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              activeClass="active"
              onClick={this.about}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              activeClass="active"
              onClick={this.services}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portofolio"
              spy={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              activeClass="active"
              onClick={this.portofolio}
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              to="timeline"
              spy={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              activeClass="active"
              onClick={this.timeline}
            >
              Timeline
            </Link>
          </li>

          <li>
            <Link
              to="contactMe"
              spy={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              activeClass="active"
              isDynamic={true}
              onClick={this.contactMe}
            >
              Contract
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
