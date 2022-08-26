import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import NewsCompnent from './component/NewsCompnent';

export default class App extends Component {
  render() {
    return (
      <div>
       <NavBar />
       <NewsCompnent />
      </div>
      // this is test comment new
    )
  }
}
