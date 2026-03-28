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
                <div className="title">Experience</div>
                <div className="subblock">
                  <div className="subtitle">Synopsys Inc - Application Engineering, Staff Engineer</div>
                  <div className="year">Jan 2025 - Present</div>
                  <div className="medium">
                  <ul className="mylist">
                    <li>Delivered ICV FEOL dummy training from environment setup, runset structure, layer operations to unified fill</li>
                    <li>Prototyped a Runset Generator for simple non-tabu rules from Design Rule Manual with usage of <strong>Lark parser and transformer</strong></li>
                    <li>Integrated flow of timing-aware fill with experience in <strong>RC extraction</strong> and <strong>STA</strong> in both Python and C/C++ version</li>
                    <li>Prototyped an <strong>HGNN model</strong> that formulates design into graph and optimize it through chunking to ensure efficient runtime</li>
                    <li>Delivered GH Copilot training to 60+ signoff team members </li>
                  </ul>
                  </div>
                  <div className="subtitle">Synopsys Inc - Application Engineering, Sr. Engineer</div>
                  <div className="year">Aug 2022 - Jan 2025</div>
                  <div className="medium">
                  <ul className="mylist">
                    <li>ICV runset coding and qualification for dummy fill insertion in advanced process.</li>
                    <li>Optimized flow that achieves <strong>10X runset coding effort improvement</strong>.</li>
                    <li>Developed utilities that reduce 30% runtime and improve QoR in FEOL dummy</li>
                    <li>Identified and debugged design rule violations before tapeout, analyzed root causes, and implemented effective solutions</li>
                    <li>Collaborated with the foundry and R&D to define requirements and qualify for new features</li>
                  </ul>
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="title">Publication</div>
                <div className="subblock">
                  <a className="subtitle" href="https://ieeexplore.ieee.org/document/11021053">Navigating Color Constraints in Multi-View Visualizations with MVcolor<i className="fa fa-link" ></i></a>
                  <div className="year">2025 IEEE PacificVis</div>
                </div>
              </div>

              <div className="block">
                <div className="title">Research</div>
                <div className="subblock">
                  <div className="subtitle">MVcolor: Recommendation of Color Encodings for Multi-View Visualizations</div>
                  <div className="medium">Graphics and Perception Lab</div>
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
                <div className="title">Courses & Additional Projects</div>
                <div className="subblock">
                  <a className="subtitle" href="https://github.com/Yunrou/boardgame-2p">Artificial Intelligence <i className="fa fa-link" ></i></a>
                  <div className="year">Python</div>
                  <div className="medium">
                    <p>
                    Designed a two-player board game AI agent. Implemented iterative deepening minimax with alpha-beta pruning, 
                    and devised a heuristic function. Achieved rank 2 in class.
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Interaction Design and Virtual Reality</div>
                  <div className="year">C#</div>
                  <img src="../../static/img/idvr-demo.gif" className="present-img" />
                  <div className="medium">
                    <p>
                    Designed a VR game, Cushion Crush. In a 3-member team, I was in charge of 1) the program that connects VR devices and the game, 
                    2) scene build, and 3) demo video production.
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Design Studies - Creative Minds and Methods</div>
                  <div className="year">Osaka University</div>
                  <img src="../../static/img/OU.gif" className="present-img" />
                  <div className="medium">
                    <p>An international online course with design practices of 9 journals and 2 term projects. 
                    Comprehended Papanek’s function complex and the seven stages of the design process.
                    </p>
                  </div>
                </div>
                <div className="subblock">
                  <div className="subtitle">Intoduction to Psychology - Keith Campbell</div>
                  <div className="year">Peterson Academy</div>
                  <img src="../../static/img/psychology-demo.gif" className="present-img" />
                </div>
                <div className="subblock">
                  <a className="subtitle" href="https://github.com/Yunrou/voc-learn-bot">LINE Bot - Vocabulary Learning Assistant <i className="fa fa-link" ></i></a>
                  <div className="year">Python, LINE Bot, AWS</div>
                  <img src="../../static/img/linebot-demo.gif" className="present-img-mobile" />
                  <div className="medium">
                    <p>Deployed a LINE Bot on AWS Lambda that helps learn TOEFL vocabulary.
                    </p>
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="title">LEADERSHIP</div>
                  <div className="subblock">
                  <div className="subtitle">Vice Mentor</div>
                  <div className="year">2017 - 2018</div>
                  <div className="medium">NCTU Blue Gear Program</div>
                </div>
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
                  <div className="medium">
                    <div className="language">Chinese</div><div className="score">Native</div>
                  </div>
                  <div className="medium">
                    <div className="language">English</div><div className="score">B2&emsp;TOEFL iBT: 89 (R24/L23/S21/W21)</div>
                  </div>
                  <div className="medium">
                    <div className="language">Japanese</div><div className="score">A2</div>
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="title">SKILLS</div>
                <div className="subblock">
                  <div className="medium">Programming Languages: </div>
                  <div className="skilltag">C/C++</div>
                  <div className="skilltag">Python</div>
                  <div className="skilltag">PERL</div>
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
                  <div className="skilltag">Unity</div>
                </div>
              </div>

            </div>
          </div>
      </Fragment>
    )
  }
}