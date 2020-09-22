import React, { Component, Fragment } from 'react';

export default class AboutMe extends Component {
  render() {
    
    return (
      <Fragment>
        <div className="contact">
          <div className="side-title">Contact <i class="fa fa-envelope-o" aria-hidden="true"></i></div>
          <div className="side-content">
          Email: yunrou.cs04@g2.nctu.edu.tw
          </div>
        </div>
      </Fragment>
    )
  }
}