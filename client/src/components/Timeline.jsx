import React, { Component } from 'react'
import { Element } from 'react-scroll'

export default class Timeline extends Component {
  render() {
    return (
      <Element name="timeline" className="timelineContainer">
        <h1 className="newtitle">Timeline</h1>
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
              <p>April 2017</p>
            </div>
            <div className="careerlineCircles">
              <p>May 2017</p>
            </div>
            <div className="lifelineCircles">
              <p>May 2019</p>
            </div>
            <div className="careerlineCircles">
              <p>May 2017</p>
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
              <img src={require('./images/celeb.jpg')} alt="" />
              <p className="title">
                Completed the 1st year studies with satisfying marks
                <br />
                <p className="locationCard">
                  Coventry,<strong>England</strong>
                </p>
              </p>
              <p className="cardText">
                The first year of Cumputing BSc is over and I am in a good position to start hoping
                for a 1st class degree
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="leftArrow" />
              <img src={require('./images/graduation.jpg')} alt="" />
              <p className="title">
                Graduated from <a href="https://www.coventry.ac.uk/">Coventry University </a>
                with a first class Degree
                <br />
                <p className="locationCard">
                  Coventry,<strong>England</strong>
                </p>
              </p>
              <p className="cardText">
                A dream came true. I managed after hard work and coulness sleepless night to get the
                best possible outcome a university can provide in terms of marking. Even though
                University is more than that. It tought me how to organise myself when deadlines are
                lined up.
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
          </div>
          {/* ------------- Card section ------------- */}
          <div className="career">
            <div className="mylifeCard">
              <div className="rightArrow" />
              <img src={require('./images/nagivation.jpg')} alt="" />
              <p className="title">
                Completed a <a href="https://www.coventry.ac.uk/">Navigation system </a>
                in Django / Python
                <br />
                <p className="locationCard">
                  Coventry,<strong>England</strong>
                </p>
              </p>
              <p className="cardText">
                It was a nagivation system where it meant to help new students navigate through the
                Coventry University campus. This website uses a lot of google APIs for google maps
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="rightArrow" />
              <img src={require('./images/bitcoin.jpg')} alt="" />
              <p className="title">
                Trying to predict cryptocurrencies behaviour
                <br />
                <p className="locationCard">
                  Coventry,<strong>England</strong>
                </p>
              </p>
              <p className="cardText">
                This project was using AI and Flask / Python to predict cryptocurrencies behaviour
                according to previous known data, so customers would know if they should buy or
                sell. Of course it was a very hard task, it was trying by using NodeJS as well.
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
            <div className="mylifeCard">
              <div className="rightArrow" />
              <img src={require('./images/chatting.jpg')} alt="" />
              <p className="title">
                Develop new features in a Chatting System
                <br />
                <p className="locationCard">
                  Coventry,<strong>England</strong>
                </p>
              </p>
              <p className="cardText">
                This was the project where made me a better developer in any sense. It tought me how
                to make algorithms that make a react website faster. How to use effectivelly Redux.
                and why Redux is very important to use.
              </p>
              <p className="cardSign">Tony Hajdini</p>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}
