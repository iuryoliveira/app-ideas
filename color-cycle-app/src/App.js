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

    colorsRgb: {
      red: 0,
      green: 0,
      blue: 0
    },

    started: false,
    interval: null,

    incrementValue: 0,
    useRgb: false,
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
    let useRgb = !this.state.useRgb;

    if(this.state.incrementValue > 0) {
      await this.setState({ started, useRgb });

      if(started) {
        let interval = setInterval(() => this.handleIncrement(), 250);
        await this.setState({ interval });
      } else {
        clearInterval(this.state.interval);
        await this.setState({ interval: null })
      }
    }
  }

  handleIncrementInput = async (event) => {
    let incrementValue = event.target.value;
    await this.setState({ incrementValue });
  }

  handleIncrement = async () => {
    let colorsRgb = this.state.colorsRgb;
    colorsRgb.red = parseInt(colorsRgb.red) + parseInt(this.state.incrementValue);

    if(this.state.colorsRgb.red > 255) colorsRgb.red = 0;

    await this.setState({ colorsRgb });
    console.log(`Incrementou ${this.state.incrementValue} para um total de ${this.state.colorsRgb.red}`);
  }

  render() {
    const { colors: { red, green, blue },colors, started, incrementValue,
    colorsRgb, useRgb } = this.state;

    return (
      <div className="App">
        <ColorInput color="Red" onChange={(e) => this.handleRedChange(e)} value={red}/>
        <ColorInput color="Green" onChange={(e) => this.handleGreenChange(e)} value={green}/>
        <ColorInput color="Blue" onChange={(e) => this.handleBlueChange(e)} value={blue}/>

        <ColorBox useRgb={useRgb} colorsRgb={colorsRgb} colors={colors}/>
        <IncrementInput onChange={(e) => this.handleIncrementInput(e)} value={incrementValue}/>
        <StartButton started={started} onClick={() => this.handleColorChange()} />
      </div>
    );
  }
}
