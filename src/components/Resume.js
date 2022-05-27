import React, { Component, Fragment } from 'react';
export default class Resume extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="main-container">
            <div className="main">
              <div className="block">
                <div className="title">EDUCATION</div>
                <div className="subblock">
                  <div className="subtitle">Master of Computer Science</div>
                  <div className="year">2019 - 2022</div>
                  <div className="medium">National Yang Ming Chiao Tung University - TW</div>
                  <div className="small">
                    <p>
                      Academics: GPA 4.28/4.3
                      <br/>
                      The Phi Tau Phi Scholastic Honor Society of the Republic of China Honorary Membership
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Bachelor of Computer Science</div>
                  <div className="year">2015 - 2019</div>
                  <div className="medium">National Chiao Tung University - TW</div>
                  <div className="small">
                    <p>
                      Academics: GPA 3.9/4.3
                      <br/>
                      Teaching Assistant (TA): Numerical Method, 2019
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="title">LEADERSHIP</div>
                <div className="subblock">
                  <div className="subtitle">Minister of Artistic Design Department</div>
                  <div className="year">2017 - 2018</div>
                  <div className="content">NCTU - Student Association of Computer Science Dept.</div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Director</div>
                  <div className="year">2016 - 2017</div>
                  <div className="content">NCTU - UU Club</div>
                </div>
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