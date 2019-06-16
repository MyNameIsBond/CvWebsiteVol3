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
          <hr width="1" size="1000" />
          <div className="mylife">
            <div className="mylifeCard" />
          </div>
          <div className="career">career</div>
        </div>
      </div>
    )
  }
}
