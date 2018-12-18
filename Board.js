import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spaces: [`?`,`?`,`?`,`?`,`?`,`?`,`?`,`?`,`?`],
      layout: [`💣`,`💰`,`🌲`,`🌲`,`🌲`,`🌲`,`🌲`,`🌲`,`🌲`],
      counter: 9
    }
  }

// https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG41.png
// images(){
// if (this.state.layout[i] === `💣`){
//   let 💣 =
// }
// }


shuffle() {
  let {layout} = this.state
  for (let i = layout.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = layout[i];
    layout[i] = layout[j];
    layout[j] = temp;
   }
   this.setState({layout: layout})
   console.log(layout);
}

componentDidMount(){
  this.shuffle()
}





activate(e){
  let { spaces, layout, counter } = this.state
  let i = e.target.id - 1
  spaces[i] = layout[i]
  if (counter === "You Win!" || counter === "You Lose"){
    return
  } else {
  if (spaces[i] === "💰"){
    counter = "You Win!"
  } else if (spaces[i] === "💣"){
    counter = "You Lose"
  } else {
    counter--
  }
  this.setState({spaces: spaces})
  this.setState({counter: counter})
  console.log("Count: " + this.state.counter);
  console.log("Position: " + e.target.id)
}
}


restart(){
  this.setState({
    counter: 9,
    spaces: [`?`,`?`,`?`,`?`,`?`,`?`,`?`,`?`,`?`],
    layout: [`💣`,`💰`,`🌲`,`🌲`,`🌲`,`🌲`,`🌲`,`🌲`,`🌲`],})
    this.shuffle()
}



  render() {
    return (
      <div className="allStyle">
      <h1 className="headerStyle">Treasure Hunt</h1>
        <table className="tableStyle">
          <tr>
            <td className="tableItem" id= '1' onClick={this.activate.bind(this)}>{this.state.spaces[0]}</td>
            <td className="tableItem" id= '2' onClick={this.activate.bind(this)}>{this.state.spaces[1]}</td>
            <td className="tableItem" id= '3' onClick={this.activate.bind(this)}>{this.state.spaces[2]}</td>
          </tr>
          <tr>
            <td className="tableItem" id= '4' onClick={this.activate.bind(this)}>{this.state.spaces[3]}</td>
            <td className="tableItem" id= '5' onClick={this.activate.bind(this)}>{this.state.spaces[4]}</td>
            <td className="tableItem" id= '6' onClick={this.activate.bind(this)}>{this.state.spaces[5]}</td>
          </tr>
          <tr>
            <td className="tableItem" id= '7' onClick={this.activate.bind(this)}>{this.state.spaces[6]}</td>
            <td className="tableItem" id= '8' onClick={this.activate.bind(this)}>{this.state.spaces[7]}</td>
            <td className="tableItem" id= '9' onClick={this.activate.bind(this)}>{this.state.spaces[8]}</td>
          </tr>
        </table>
        <p>{this.state.counter}</p>
        <p><button onClick={this.restart.bind(this)}>Restart Game</button></p>
      </div>
    );
  }
}

export default Board;
