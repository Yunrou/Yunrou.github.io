import React, { Component, Fragment } from 'react';
export default class Resume extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="main-container">
            <div className="main">
              <div className="block">
                <div className="title">EDUCATION</div>
                <div className="subtitle">Master of Science </div>
                <div className="subtitle year">(2019-present)</div>
                <div className="content">
                  <p>
                    National Chiao Tung University - Taiwan<br/>
                    Dept. of Computer Science & Inst. of Multimedia Engineering<br/>
                    Academics: GPA 4.22/4.3
                  </p>
                </div>
                <div className="subtitle">Bachelor of Science </div>
                <div className="subtitle year">(2015-2019)</div>
                <div className="content">
                  <p>
                    National Chiao Tung University - Taiwan<br/>
                    Dept. of Computer Science<br/>
                    Academics: GPA 3.9/4.3
                  </p>
                </div>
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