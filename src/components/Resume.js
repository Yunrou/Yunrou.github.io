import React, { Component, Fragment } from 'react';
export default class Resume extends Component {
  render() {
    
    return (
      <Fragment>
          <div className="main-container">
            <div className="main">
              <div className="block">
                <a className="textbutton" href='../../static/pdf/resume.pdf' download>
                  <i className="fa fa-arrow-down icon" ></i> Click to download CV
                </a>
              </div>
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
                <div className="title">Research</div>
                <div className="subblock">
                  <div className="subtitle">MVcolor: Recommendation of Color Encodings for Multi-View Visualizations</div>
                  <div className="medium">Graphical and Perception Lab</div>
                  <div className="small">Sep 2019 - Apr 2022</div>
                  <img src="../../static/img/mvcolor-demo.gif" className="present-img" />
                  <div className="medium">
                  <ul className="mylist">
                    <li>Developed an interactive recommendation system, MVcolor, that models the colorization of a multi-view
visualization system.</li>
                    <li>Formulated a grouping problem into <strong>Set Partitioning Problem</strong> solved by <strong>Gurobi</strong> optimization.</li>
                    <li>Ensured color discriminability using a <strong>Genetic Algorithm</strong>.</li>
                    <li>Used <strong>React</strong> for front-end and <strong>Django/Django REST Framework</strong> for back-end.</li>
                  </ul>
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="title">Course Highlight</div>
                <div className="subblock">
                  <a className="subtitle" href="https://github.com/Yunrou/boardgame-2p">Artificial Intelligence</a>
                  <div className="year">Python</div>
                  <div className="medium">
                    <p>
                    Designed a two-player board game AI agent. Implemented iterative deepening minimax with alpha-beta pruning, 
                    and devised a heuristic function. Achieved rank 2 in class.
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Design Studies - Creative Minds and Methods</div>
                  <div className="year">Osaka University</div>
                  <div className="medium">
                    <p>An international online course with design practices of 9 journals and 2 term projects. 
                    Comprehended Papanek’s function complex and the seven stages of the design process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="title">LEADERSHIP</div>
                <div className="subblock">
                  <div className="subtitle">Minister of Artistic Design Department</div>
                  <div className="year">2017 - 2018</div>
                  <div className="medium">NCTU - Student Association of Computer Science Dept.</div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Director</div>
                  <div className="year">2016 - 2017</div>
                  <div className="medium">NCTU - UU Club</div>
                </div>
              </div>

              <div className="block">
                <div className="title">LANGUAGES</div>
                <div className="subblock">
                  <div className="language">Chinese</div><div className="score">Native</div>
                  <div className="language">English</div><div className="score">B2&emsp;TOEFL iBT: 89 (R24/L23/S21/W21)</div>
                </div>
              </div>

              <div className="block">
                <div className="title">SKILLS</div>
                <div className="subblock">
                  <div className="medium">Programming Languages: </div>
                  <div className="skilltag">C/C++</div>
                  <div className="skilltag">Python</div>
                  <div className="skilltag">R</div>
                  <div className="skilltag">MATLAB</div>

                  <div className="medium">Web Development: </div>
                  <div className="skilltag">HTML/CSS</div>
                  <div className="skilltag">Javescript</div>
                  <div className="skilltag">React</div>
                  <div className="skilltag">Django/Django REST Framework</div>

                  <div className="medium">Visualization: </div>
                  <div className="skilltag">Vega-Lite</div>
                  <div className="skilltag">D3.js</div>
                  <div className="skilltag">Matplotlib</div>

                  <div className="medium">Technology: </div>
                  <div className="skilltag">Git/GitHub</div>
                  <div className="skilltag">Latex</div>
                </div>
              </div>

            </div>
          </div>
      </Fragment>
    )
  }
}