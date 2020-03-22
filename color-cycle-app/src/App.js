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
    let value = event.value;
    await this.setState({ red: value });
  }

  handleGreenChange = async (event) => {
    let value = event.value;
    await this.setState({ green: value });
  }

  handleBlueChange = async (event) => {
    let value = event.value;
    await this.setState({ blue: value });
  }

  render() {
    const { colors: { red, green, blue}, colors } = this.state;

    return (
      <div className="App">
        <ColorInput color="Red" onChange={(e) => this.handleRedChange(e)} value={red}/>
        <ColorInput color="Green" onChange={(e) => this.handleGreenChange(e)} value={green}/>
        <ColorInput color="Blue" onChange={(e) => this.handleBlueChange(e)} value={blue}/>
        <ColorBox colors={colors}/>
      </div>
    );
  }
}
