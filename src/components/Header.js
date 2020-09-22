import React, { Component, Fragment } from 'react';

export default class Header extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="header-container">
            <div className="header">
            <img src="./static/img/rou04.jpg" className="profile-img"/>
            
            <div className="header-content">
              <div className="title">ABOUT ME</div>
              <div className="content">
                Hi, I am Yun-Rou (Lilian) Lin, a computer science student, 
                currently studying for the master degree at National Chiao Tung University in Taiwan.
                I am interested in Data Science--
                including Artificial Intelligence, Data Mining, Data Visualization, and so on and so forth.
                I enjoy acquiring new knowledge, 
                yet I still have a long way to go due to a wide variety of knowledge in computer science, .
                "Learning is a lifelong journey!" 
                In addition, via participating in social engagements and cooperation projects in university, 
                I become an astute and open-minded team worker. 

                Furthermore, knowledge in aesthetics and psychology engages me. 
                Reading psychological ariticles and books makes me 
                become a more mature individual with robust mindset. 
                Appreciating artworks inspires and intrigues me to come up with creative ideas, 
                and be more sensitive to the surroundings.
                Consequently, I am capable of conquering difficulties without fear 
                and develop innovative thoughts.

                I love challenges and the sense of accomplishment, and usually tell to myself, 
                "Take risks and go for it!"
              </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}