import React, { Component } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { Element } from 'react-scroll'

export default class ContactMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      nameError: false,
      emailError: false,
      subjectError: false
    }
  }

  checkError() {
    const { name, email, subject, message } = this.state
    if (name.length < 4) {
      this.setState({ nameError: true })
    } else {
      this.setState({ nameError: false })
    }
    if (subject.length < 4) {
      this.setState({ subjectError: true })
    } else {
      this.setState({ subjectError: false })
    }
    if (email.length < 4) {
      this.setState({ emailError: true })
    } else {
      this.setState({ emailError: false })
    }
    if (message.length < 4) {
      this.setState({ messageError: true })
    } else {
      this.setState({ messageError: false })
    }
    return
  }
  async sendEmail() {
    const { name, email, subject, message } = this.state
    try {
      this.checkError()
      this.setState({ loading: true })
      const r = await axios.post('http://127.0.0.1:8080/email', {
        data: { name, email, subject, message }
      })
      this.setState({ name: '', email: '', subject: '', message: '' })
      this.setState({ loading: false })
    } catch (error) {
      throw error
    }
  }

  render() {
    // errors
    const { messageError, emailError, nameError, subjectError } = this.state
    const { name, email, subject, message, loading, error } = this.state
    return (
      <Element name="contactMe" className={loading ? 'contactContainer op' : 'contactContainer'}>
        <h1 className="newtitle">Contact Me</h1>
        {loading ? (
          <div className="loaderContainer">
            <BeatLoader sizeUnit={'px'} size={15} color={'black'} loading={true} />
          </div>
        ) : null}
        <input
          className={nameError ? 'error' : null}
          value={name}
          onChange={e => {
            this.setState({ name: e.target.value })
          }}
          type="text"
          placeholder="Name*"
          name=""
          id="name"
          onBlur={this.checkError.bind(this)}
        />
        <input
          className={emailError ? 'error' : null}
          value={email}
          onChange={e => {
            this.checkError.bind(this)
            this.setState({ email: e.target.value })
          }}
          type="email"
          placeholder="Email*"
          id="email"
        />
        <input
          className={subjectError ? 'error' : null}
          value={subject}
          onChange={e => {
            this.checkError()
            this.setState({ subject: e.target.value })
          }}
          type="text"
          placeholder="Subject*"
          type="email"
          id="subject"
        />
        <textarea
          className={messageError ? 'error' : null}
          value={message}
          onChange={e => {
            this.checkError()
            this.setState({ message: e.target.value })
          }}
          placeholder="Your message*"
        />
        <div className="buttonMessage">
          <a onClick={this.sendEmail.bind(this)}>Send Message</a>
        </div>
      </Element>
    )
  }
}
