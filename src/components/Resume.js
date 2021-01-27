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
                  <div className="subtitle">Master of Science</div>
                  <div className="content">
                    <p>
                      2019 - present<br/>
                      National Chiao Tung University - Taiwan<br/>
                      Dept. of Computer Science & Inst. of Multimedia Engineering<br/>
                      Academics: GPA 4.22/4.3
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Bachelor of Science</div>
                  <div className="content">
                    <p>
                      2015 - 2019<br/>
                      National Chiao Tung University - Taiwan<br/>
                      Dept. of Computer Science<br/>
                      Academics: GPA 3.9/4.3
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="title">WORK EXPERIENCE</div>
                <div className="subblock">
                  <div className="subtitle">Teaching Assistant</div>
                  <div className="content">
                    <p>
                      Feb 2019 - Jun 2019<br/>
                      National Chiao Tung University - Taiwan<br/>
                      Course: Numerical Method
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="title">LEADERSHIP EXPERIENCE</div>
                <div className="subblock">
                  <div className="subtitle">Minister of Artistic Design Department</div>
                  <div className="content">
                    <p>
                      2017 - 2018<br/>
                      Student Association of Computer Science Dept. @NCTU
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Director</div>
                  <div className="content">
                    <p>
                      2016 - 2017<br/>
                      UU Club @NCTU
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Vice Coordinator</div>
                  <div className="content">
                    <p>
                      2017 Winter<br/>
                      UU Club Winter Camp @NCTU
                    </p>
                  </div>
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