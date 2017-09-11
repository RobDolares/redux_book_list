import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
  render() {
    return (
      <div id="mainContainer" className="container-fluid col-md-10 col-md-offset-1">
        <div id="header">
          <h1>Books + Roses:</h1>
          <h2>Appetite for Instruction</h2>
        </div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
