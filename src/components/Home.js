import React, { Component, Fragment } from 'react';
import Header from './Header'
import Main from './Main'
export default class Home extends Component {
  render() {
    
    return (
      <Fragment>
          <Header />
          <Main />
          
      </Fragment>
    )
  }
}