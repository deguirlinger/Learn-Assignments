import React, { Component } from 'react';
import './App.css';
import Board from './Board.js'
import Square from './Square.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      < Board/>
      </div>
    );
  }
}

export default App;

//
// - App contains the board
// - Board contains 9 squares/positions
//         - squares/positions represented in state like this:
//         - this.state = { spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0] }
