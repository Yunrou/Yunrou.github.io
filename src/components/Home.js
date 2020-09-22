import React, { Component, Fragment } from 'react';
export default class Home extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="main-container">
            <div className="main">
              <img src="./static/img/rou04.jpg" className="profile-img"/>
              <div className="block">
                <div className="title">ABOUT ME</div>
                <div className="content">
                  <p>
                    Hi, I am Yun-Rou (Lilian) Lin, a computer science student, 
                    currently studying for the master degree at National Chiao Tung University in Taiwan.
                    </p>
                    
                    <p>
                    I am interested in Data Science--including Artificial Intelligence, Data Mining, Data Visualization, and so on and so forth.
                    I enjoy acquiring new knowledge, 
                    yet I still have a long way to go due to a wide variety of knowledge in the field of computer science.
                    "Learning is a lifelong journey!" 
                    In addition, via participating in social engagements and cooperation projects in university,
                    I become an astute and open-minded team worker. 
                    </p>
                    
                    <p>
                    Furthermore, knowledge in aesthetics and psychology engages me.
                    Reading psychological ariticles and books makes me
                    become a more mature individual with robust mindset.
                    Appreciating artworks inspires and intrigues me to come up with creative ideas,
                    and be more sensitive to the surroundings.
                    Consequently, I am capable of conquering difficulties without fear
                    and develop innovative thoughts.
                    </p>
                    
                    <p>
                    I love challenges and the sense of accomplishment. 
                    Just take risks and go for it!
                    </p>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    )
  }
}