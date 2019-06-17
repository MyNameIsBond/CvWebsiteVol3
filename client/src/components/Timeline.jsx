import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div className="timelineContainer">
        <h1>Timeline</h1>
        <div className="timelineHeaders">
          <h4>My life</h4>
          <h4>Career</h4>
          <small>Important moments of my life and education</small>
          <small>My path as a Developer</small>
        </div>
        <div className="timeLine">
          <div className="timelineCircles">
            <hr width="1" size="2000" />
            <div className="lifelineCircles">
              <p>august 2016</p>
            </div>
            <div className="careerlineCircles">
              <p>January 2017</p>
            </div>
            <div className="lifelineCircles">
              <p>April 2018</p>
            </div>
            <div className="careerlineCircles">
              <p>august 2016</p>
            </div>
          </div>
          <div className="mylife">
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/acceptance.jpg')} alt="" />
              <p className="title">
                I was accepted by <a href="https://www.coventry.ac.uk/">Coventry University</a>
                <br />
                <p className="locationCard">
                  Athens,<strong>Greece</strong>
                </p>
              </p>
              <p className="cardText">
                The acceptance of Coventry University came and I was more than happy due to I had to
                have a good mark in IELTS, which was one the requirements for my appliance to get
                accepted along with good marks in mathematics and my A levels
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/acceptance.jpg')} alt="" />
              <p className="title">
                I was accepted by <a href="https://www.coventry.ac.uk/">Coventry University</a>
                <br />
                <p className="locationCard">
                  Athens,<strong>Greece</strong>
                </p>
              </p>
              <p className="cardText">
                The acceptance of Coventry University came and I was more than happy due to I had to
                have a good mark in IELTS, which was one the requirements for my appliance to get
                accepted along with good marks in mathematics and my A levels
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/acceptance.jpg')} alt="" />
              <p className="title">
                I was accepted by <a href="https://www.coventry.ac.uk/">Coventry University</a>
                <br />
                <p className="locationCard">
                  Athens,<strong>Greece</strong>
                </p>
              </p>
              <p className="cardText">
                The acceptance of Coventry University came and I was more than happy due to I had to
                have a good mark in IELTS, which was one the requirements for my appliance to get
                accepted along with good marks in mathematics and my A levels
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
          </div>
          <div className="career">
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/acceptance.jpg')} alt="" />
              <p className="title">
                I was accepted by <a href="https://www.coventry.ac.uk/">Coventry University</a>
                <br />
                <p className="locationCard">
                  Athens,<strong>Greece</strong>
                </p>
              </p>
              <p className="cardText">
                The acceptance of Coventry University came and I was more than happy due to I had to
                have a good mark in IELTS, which was one the requirements for my appliance to get
                accepted along with good marks in mathematics and my A levels
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/acceptance.jpg')} alt="" />
              <p className="title">
                I was accepted by <a href="https://www.coventry.ac.uk/">Coventry University</a>
                <br />
                <p className="locationCard">
                  Athens,<strong>Greece</strong>
                </p>
              </p>
              <p className="cardText">
                The acceptance of Coventry University came and I was more than happy due to I had to
                have a good mark in IELTS, which was one the requirements for my appliance to get
                accepted along with good marks in mathematics and my A levels
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/acceptance.jpg')} alt="" />
              <p className="title">
                I was accepted by <a href="https://www.coventry.ac.uk/">Coventry University</a>
                <br />
                <p className="locationCard">
                  Athens,<strong>Greece</strong>
                </p>
              </p>
              <p className="cardText">
                The acceptance of Coventry University came and I was more than happy due to I had to
                have a good mark in IELTS, which was one the requirements for my appliance to get
                accepted along with good marks in mathematics and my A levels
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
