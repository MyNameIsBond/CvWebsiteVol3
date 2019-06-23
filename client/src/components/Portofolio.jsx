import React, { Component } from 'react'
import { HoverCard } from 'react-png-hovercard'
import SimpleIcons from 'simple-icons-react-component'
import MaterialIcon, { colorPalette } from 'material-icons-react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Portofolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maxWidth: 400,
      animationSpeed: 500,
      height: 300,
      borderRadius: '2px'
    }
  }
  render() {
    const { maxWidth, animationSpeed, height, borderRadius } = this.state
    return (
      <Element name="portofolio" className="portofolioContainer">
        <div className="serTitle">
          <h1 className="newtitle">Portofolio</h1>
          <div className="separator" />
        </div>
        <div className="portofolioContent">
          <div id="chattingSystem">
            <HoverCard
              front={
                <div className="Front">
                  <MaterialIcon size={90} icon="forum" />
                  <div className="seper" />
                  <SimpleIcons name="React" />
                </div>
              }
              back={
                <div className="Back">
                  <h4>Chatting System</h4>
                  <p>
                    A complete chatting system with intresting features, like watching a video at
                    the same time with the person you talking to.
                  </p>
                  <SimpleIcons name="GitHub" />
                </div>
              }
              maxWidth={'100%'}
              animationSpeed={animationSpeed}
              height={'100%'}
              margin={10}
              borderRadius={borderRadius}
              className="hoverCard"
            />
          </div>
          <div id="recipeWebsite">
            <HoverCard
              front={
                <div className="Front">
                  <MaterialIcon size={90} icon="fastfood" />
                  <div className="seper" />
                  <SimpleIcons name="React" />
                </div>
              }
              back={
                <div className="Back">
                  <h4>Recipe Blog</h4>
                  <p>
                    Users can upload rate and add recipes to favourites, they can unpublish their
                    recipes.
                  </p>
                  <SimpleIcons name="GitHub" />
                </div>
              }
              maxWidth={maxWidth}
              animationSpeed={animationSpeed}
              height={height}
              margin={10}
              borderRadius={borderRadius}
              className="hoverCard"
            />
          </div>
          <div id="cryptoPr">
            <HoverCard
              front={
                <div className="Front">
                  <MaterialIcon size={90} icon="show_chart" />
                  <div className="seper" />
                  <SimpleIcons name="Bitcoin" />
                </div>
              }
              back={
                <div className="Back">
                  <h4>Cryptocurrency Tracker</h4>
                  <p>
                    A website made in Jade-NodeJS it would show details about the cryptocurrencies
                    all over the world
                  </p>
                  <SimpleIcons name="GitHub" />
                </div>
              }
              maxWidth={maxWidth}
              animationSpeed={animationSpeed}
              height={height}
              margin={10}
              borderRadius={borderRadius}
              className="hoverCard"
            />
          </div>
          <div id="blogDjango">
            <HoverCard
              front={
                <div className="Front">
                  <MaterialIcon size={90} icon="device_hub" />
                  <div className="seper" />
                  <SimpleIcons name="React" />
                </div>
              }
              back={
                <div className="Back">
                  <h4>Smart Home Hub</h4>
                  <p>
                    A website made in Jade-NodeJS it would show the contition of the house, and be
                    able to switch off or on the lights of the house. It can give historical data.
                    Tell the temprature by making use of hardware places in the house.
                  </p>
                  <SimpleIcons name="GitHub" />
                </div>
              }
              maxWidth={'100%'}
              animationSpeed={animationSpeed}
              height={'100%'}
              margin={10}
              borderRadius={borderRadius}
              className="hoverCard"
            />
          </div>
          <div id="navSystem">
            <HoverCard
              front={
                <div className="Front">
                  <MaterialIcon size={90} icon="place" />
                  <div className="seper" />
                  <SimpleIcons name="Python" />
                </div>
              }
              back={
                <div className="Back">
                  <h4>Nagivation Sysyem</h4>
                  <p>Website where would give dirrections to new students in Coventry University</p>
                  <SimpleIcons name="GitHub" />
                </div>
              }
              maxWidth={maxWidth}
              animationSpeed={animationSpeed}
              height={height}
              margin={10}
              borderRadius={borderRadius}
              className="hoverCard"
            />
          </div>
          <div id="homeHub">
            <HoverCard
              front={
                <div className="Front">
                  <SimpleIcons name="Blogger" />
                  <div className="seper" />
                  <SimpleIcons name="Django" />
                </div>
              }
              back={
                <div className="Back">
                  <h4>Blog</h4>
                  <p>A blog website with intresting features</p>
                  <SimpleIcons name="GitHub" />
                </div>
              }
              maxWidth={'100%'}
              animationSpeed={animationSpeed}
              height={'100%'}
              borderRadius={borderRadius}
              className="hoverCard"
            />
          </div>
        </div>
      </Element>
    )
  }
}
