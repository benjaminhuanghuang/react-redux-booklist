import React, { Component } from 'react';
//
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}

export default App;
