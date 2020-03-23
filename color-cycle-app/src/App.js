import React, { Component } from 'react';

import ColorInput from './components/colorInput';
import ColorBox from './components/colorBox';
import StartButton from './components/startButton';
import IncrementInput from './components/incrementInput';

export default class App extends Component {
  state = {
    colors: {
      red: 'FF',
      green: '00',
      blue: '00'
    },

    started: false,
    interval: null,
    incrementValue: 0
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

  handleColorChange = async () => {
    let started = !this.state.started;
    await this.setState({ started });

    if(started) {
      let interval = setInterval(() => console.log(`Acrescentando + ${this.state.incrementValue}`), 250);
      await this.setState({ interval });
    } else {
      clearInterval(this.state.interval);
      await this.setState({ interval: null })
    }
  }

  handleIncrementInput = async (event) => {
    let incrementValue = event.target.value;
    await this.setState({ incrementValue });
  }

  render() {
    const { colors: { red, green, blue }, colors, started, incrementValue } = this.state;

    return (
      <div className="App">
        <ColorInput color="Red" onChange={(e) => this.handleRedChange(e)} value={red}/>
        <ColorInput color="Green" onChange={(e) => this.handleGreenChange(e)} value={green}/>
        <ColorInput color="Blue" onChange={(e) => this.handleBlueChange(e)} value={blue}/>

        <ColorBox colors={colors}/>
        <IncrementInput onChange={(e) => this.handleIncrementInput(e)} value={incrementValue}/>
        <StartButton started={started} onClick={() => this.handleColorChange()} />
      </div>
    );
  }
}
