import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';

class Website extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "home",
      collapse: false,
    }
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
    this.homeRef = React.createRef();
    this.resumeRef = React.createRef();
    this.contactRef = React.createRef();
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });

  }
  handleScrollToElement(e) {
    const activeTab = e.target.getAttribute("data-tab");
    this.setState({ activeTab: activeTab,
                    collapse: false });
    if (activeTab == "home")
      window.scrollTo(0, this.homeRef.current.offsetTop);
    else if (activeTab == "resume")
      window.scrollTo(0, this.resumeRef.current.offsetTop);
    else if (activeTab == "contact")
      window.scrollTo(0, this.contactRef.current.offsetTop);
  }
  handleCollapse(e) {
    this.setState({ collapse: !this.state.collapse });

  }
  render() {
    
    return (
      <Fragment>
        <div className="container">
          
          <div className="sidenav">
            <MediaQuery minDeviceWidth={1224}>
              <div className="header">
                <img src="./static/img/profile_img.JPG" className="profile-img"/>
              </div>
            </MediaQuery>
            <div className="nav-logo">
              YUN ROU LIN
              <a className="option" onClick={this.handleCollapse}><i className="fa fa-bars"></i></a>
            </div>
            <MediaQuery minDeviceWidth={1224}>
            <div className="options">
              <a data-tab="home" className="sideoption" onClick={this.handleScrollToElement}>Home</a>
              <a data-tab="resume" className="sideoption" onClick={this.handleScrollToElement}>Resume</a>
              <Contact />
            </div>
            </MediaQuery>
            
            <MediaQuery maxDeviceWidth={1224}>
            <div className={"options" + (this.state.collapse==true? " in": "")}>
              <a data-tab="home" className="sideoption" onClick={this.handleScrollToElement}>Home</a>
              <a data-tab="resume" className="sideoption" onClick={this.handleScrollToElement}>Resume</a>
              <a data-tab="contact" className="sideoption" onClick={this.handleScrollToElement}>Contact</a>
            </div>
            </MediaQuery>

            
          </div>
          <div className="tab-content-container">
            <div ref={this.homeRef} className="tab-pane active" id="home">
              <Home />
            </div>
            <div ref={this.resumeRef} className="tab-pane active" id="resume">
              <Resume />
            </div>

            <MediaQuery maxDeviceWidth={1224}>
            <div ref={this.contactRef} className="tab-pane active" id="contact">
              <Contact />
            </div>
            </MediaQuery>
          </div>
        </div>
      </Fragment>
    
    );
  }
}

ReactDOM.render(<Website />, document.getElementById('root'));