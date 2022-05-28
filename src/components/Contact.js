import React, { Component, Fragment } from 'react';

export default class AboutMe extends Component {
  render() {
    
    return (
      <Fragment>
        <div className="contact">
          <div className="side-title">Contact <i class="fa fa-envelope-o" aria-hidden="true"></i></div>
          <div className="side-content">Email: yunrou.cs08@nycu.edu.tw</div>
          <div className="side-content">
          <a className="external-link linkedin"><i className="fa fa-linkedin"></i></a>
          <a className="external-link github"><i className="fa fa-github"></i></a>
          </div>

        </div>
      </Fragment>
    )
  }
}