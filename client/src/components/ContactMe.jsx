import React, { Component } from 'react'
import axios from 'axios'
export default class ContactMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  async sendEmail() {
    const { name, email, subject, message } = this.state
    try {
      const r = await axios.post('/email', { name, email, subject, message })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name, email, subject, message } = this.state
    return (
      <div className="contactContainer">
        <h1 className="newtitle">Contact Me</h1>
        <input
          value={name}
          onChange={e => {
            console.log(e.target.value)
            this.setState({ name: e.target.value })
          }}
          type="text"
          placeholder="Name"
          name=""
          id="name"
        />
        <input
          value={email}
          onChange={e => {
            this.setState({ email: e.target.value })
          }}
          type="text"
          placeholder="Email"
          id="email"
        />
        <input
          value={subject}
          onChange={e => {
            this.setState({ subject: e.target.value })
          }}
          type="text"
          placeholder="Subject"
          type="email"
          id="subject"
        />
        <textarea
          value={message}
          onChange={e => {
            this.setState({ message: e.target.value })
          }}
          placeholder="Your message"
        />
        <div className="buttonMessage">
          <a onClick={this.sendEmail.bind(this)}>Send Message</a>
        </div>
      </div>
    )
  }
}
