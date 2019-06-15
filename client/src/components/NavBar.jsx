import React, { Component } from 'react'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">blog</a>
          </li>
          <li>
            <a href="">Portofolio</a>
          </li>
          <li>
            <a href="">Contract</a>
          </li>
        </ul>
      </div>
    )
  }
}
