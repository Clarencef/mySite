import React, { Component } from 'react';


class FlipCard extends Component {
  constructor () {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      whichAtTop: "flipCard_front",
      frontClass: "toTop",
      backClass: "toBack",
    };
  }

  onClick (e) {
    switch (this.state.whichAtTop) {
      case "flipCard_front":
        this.setState({
          whichAtTop: "flipCard_back",
          frontClass: "toBack",
          backClass: "toTop",
        });
      break;
      case "flipCard_back":
        this.setState({
          whichAtTop: "flipCard_front",
          frontClass: "toTop",
          backClass: "toBack",
        });
    }
  }
  render () { 
    return (
      <div className="flipCard">
          <div className={`flipCard_front ${this.state.frontClass}`}>
            <h1>front</h1>
            <button onClick={this.onClick}>Flip Card!!!</button>
          </div>
          <div className={`flipCard_back ${this.state.backClass}`}>
            <button onClick={this.onClick}>Flip Card</button>
          </div>
      </div>
    )
  }
}

export default FlipCard;
