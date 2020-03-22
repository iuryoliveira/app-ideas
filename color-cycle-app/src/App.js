import React, { Component } from 'react';

import ColorInput from './components/colorInput';
import ColorBox from './components/colorBox';

export default class App extends Component {
  state = {
    colors: {
      red: 'FF',
      green: '00',
      blue: '00'
    }
  }

  handleRedChange = async (event) => {
    let colors = this.state.colors;
    colors.red = event.target.value;

    await this.setState({ colors });
  }

  handleGreenChange = async (event) => {
    let colors = this.state.colors;
    colors.green = event.target.value;

    await this.setState({ colors });
  }

  handleBlueChange = async (event) => {
    let colors = this.state.colors;
    colors.blue = event.target.value;

    await this.setState({ colors });
  }

  render() {
    const { red, green, blue } = this.state.colors;

    return (
      <div className="App">
        <ColorInput color="Red" onChange={(e) => this.handleRedChange(e)} value={red}/>
        <ColorInput color="Green" onChange={(e) => this.handleGreenChange(e)} value={green}/>
        <ColorInput color="Blue" onChange={(e) => this.handleBlueChange(e)} value={blue}/>
        <ColorBox colors={this.state.colors}/>
      </div>
    );
  }
}
