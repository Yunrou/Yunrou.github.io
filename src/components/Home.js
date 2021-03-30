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
                    Hi, I am Yun-Rou (Lilian) Lin, a computer science student, 
                    currently studying for a master's degree at National Chiao Tung University in Taiwan.
                    <br/><br/>
                    After graduating from the University, 
                    I found I am really into the field of data science, thus, taking several related courses, such as artificial intelligence, data mining, data visualization, machine learning, applied statistics, and so forth.
                    "Learning is a lifelong journey!" I enjoy acquiring new knowledge, 
                    yet still have a long way to go due to a wide variety of knowledge in the field of computer science and data science.
                    <br/><br/>
                    In addition, via participating in social engagements and cooperation projects in university,
                    I became an adaptable and open-minded team player. In a team, I would like to listen to others' 
                    suggestions, thoughts, and ideas; Also, expressing my own opinions. 
                    I believe a frank and effective discussion could accelerate our working progress, and thereby making a better decision.
                    <br/><br/>
                    Furthermore, knowledge in aesthetics and psychology rather engages me.
                    Reading psychological articles and books makes me
                    become a more mature individual with a robust mindset.
                    Appreciating artworks inspires and intrigues me to come up with creative ideas,
                    and be more sensitive to the surroundings.
                    Consequently, I am capable of conquering difficulties without fear
                    and develop innovative thoughts.
                    <br/><br/>
                    Besides, I am looking forward to working as a data scientist after graduation.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}