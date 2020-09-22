import React, { Component, Fragment } from 'react';

export default class Main extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="main-container">
            <div className="main">
              <div className="block">
              <div className="title">EDUCATION</div>
                <div className="content"></div>
              </div>
              <div className="block">
              <div className="title">WORK EXPERIENCE</div>
              </div>
              <div className="block">
              <div className="title">SKILLS</div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}