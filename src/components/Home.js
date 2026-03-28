import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';

export default class Home extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="main-container">
            <div className="main">
              <MediaQuery maxDeviceWidth={1224}>
                  <img src="./static/img/profile_img.JPG" className="profile-img"/>
              </MediaQuery>
              <div className="block">
                <div className="title">ABOUT ME</div>
                <div className="medium">
                  <p>
                    Hi, I am LILIAN! Currently an Application Engineer in Physical Verification.
                    With a deep fascination for logic and graphics, 
                    I am helping teams enhance infrastructure and navigate the complexities.
                    <br/><br/>
                    "Learning is a lifelong journey!" It is genuine joy in exploring new knowledge across diverse fields, keeping my insights fresh and sharp.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}