import React, { Component } from 'react'
import Flag from 'react-world-flags'
import SimpleIcons from 'simple-icons-react-component'
import ReactTooltip from 'react-tooltip'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class AboutMe extends Component {
  render() {
    return (
      <Element name="about">
        <div className="aboutMe">
          <img src={require('./images/profile4.png')} />
          <div className="aboutMeTextGrid">
            <h1>About Me</h1>
            <p className="subtitle">I am a full stack developer</p>
            <p className="aboutMeText">
              I am a high calibrate graduate in Computing BSc with 1st classification. Throughout my
              studies, work experience and interests, I have proven myself to be a natural leader
              with outstanding Communication & Co-ordination skills. Willing to relocate, I savour
              and work at my best when challenged and am very well adept to being part of and
              leading a team, as well as working alone. I am devoted to providing outstanding
              customer service and am extremely motivated by my passion for programming.
            </p>
            <div className="languages">
              <p>Languages</p>
              <div className="languagesGrid">
                <Flag code={'gb'} height="30" />
                <Flag code={'gr'} height="30" />
              </div>
            </div>
            <div className="skills">
              <p>Key Skills </p>
              <div className="skillsGrid">
                <div data-tip="Git">
                  <SimpleIcons name="Git" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div>
                  <div data-tip="C++">
                    <SimpleIcons name="C++" />
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </div>
                </div>
                <div>
                  <div data-tip="Sass">
                    <SimpleIcons name="Sass" />
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </div>
                </div>
                <div>
                  <div data-tip="Swift">
                    <SimpleIcons name="Swift" />
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </div>
                </div>
                <div data-tip="Linux">
                  <SimpleIcons name="Linux" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="React.js">
                  <SimpleIcons name="React" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="MySQL">
                  <SimpleIcons name="MySQL" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Xcode">
                  <SimpleIcons name="Xcode" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Redux">
                  <SimpleIcons name="Redux" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Python Flask">
                  <SimpleIcons name="Flask" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="GraphQL">
                  <SimpleIcons name="GraphQL" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Node.js">
                  <SimpleIcons name="Node.js" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="MongoDB">
                  <SimpleIcons name="MongoDB" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Material Design">
                  <SimpleIcons name="Material Design" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Visual Studio Code">
                  <SimpleIcons name="Visual Studio Code" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Django">
                  <SimpleIcons name="Django" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="JavaScript">
                  <SimpleIcons name="JavaScript" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="CSS3">
                  <SimpleIcons name="CSS3" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="JSON">
                  <SimpleIcons name="JSON" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="HTML5">
                  <SimpleIcons name="HTML5" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="PostgreSQL">
                  <SimpleIcons name="PostgreSQL" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Flutter">
                  <SimpleIcons name="Flutter" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="D3.js">
                  <SimpleIcons name="D3.js" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
                <div data-tip="Python">
                  <SimpleIcons name="Python" />
                  <ReactTooltip place="top" type="dark" effect="solid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}
