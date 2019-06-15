import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import SimpleIcons from 'simple-icons-react-component'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <div className="homeScreen">
        <Parallax
          bgClassName="homeImg"
          blur={5}
          bgImage={require('./images/profile3.jpg')}
          strength={300}
        >
          <div style={{ height: '100vh' }}>
            <div className="credGrid">
              <div className="homeCred">
                <h4>Welcome</h4>
                <h2>
                  I am <strong>Tony</strong> and I am a full stack developer
                </h2>
                <p>hungry to learn more</p>
              </div>
              <div className="iconsCred">
                <SimpleIcons name="GitHub" />
                <SimpleIcons name="LinkedIn" />
              </div>
              <button>Contract Me</button>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}
