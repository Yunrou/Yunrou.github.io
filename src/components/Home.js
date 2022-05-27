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
                <div className="content">
                  <p>
                    Hi, I am LILIAN! 
                    <br/><br/>
                    I am a programmer graduate from NYCU, TW, with a passion for data science and multimedia engineering.
                    In graduate school, my research focused on the color encodings for multi-view visualizations (e.g., dashboards), 
                    and I developed an interactive recommendation tool that mainly deals with the color consistency.
                    <br/><br/>
                    "Learning is a lifelong journey!" I enjoy acquiring new knowledge yet still have a long way to go.
                    <br/><br/>
                    In addition, I became an adaptable and open-minded team player via participating in social engagements and cooperation projects in school.
                    In a team, I would like to listen to and organize others' 
                    suggestions, comments, and ideas and also express my own opinions. 
                    <br/><br/>
                    Aside from being a software developer, I want to be a creator to create values and make contribution, like Hayao Miyazaki, 
                    seeking inspirations, identifying the needs and limitations, and producing innovate products with clear concepts and definition.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}