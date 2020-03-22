import React, { Component } from 'react';

import ColorInput from './components/colorInput';
import ColorBox from './components/colorBox';

export default class App extends Component {
  state = {
    colors: {
      red: 'FF',
      green: '00',
      blue: '00'
    },

    started: false,
    interval: null,
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
      let interval = setInterval(() => console.log('rodando'), 250);
      await this.setState({ interval });
    } else {
      clearInterval(this.state.interval);
      await this.setState({ interval: null })
    }
  }

  render() {
    const { colors: { red, green, blue }, colors, started  } = this.state;

    return (
      <div className="App">
        <ColorInput color="Red" onChange={(e) => this.handleRedChange(e)} value={red}/>
        <ColorInput color="Green" onChange={(e) => this.handleGreenChange(e)} value={green}/>
        <ColorInput color="Blue" onChange={(e) => this.handleBlueChange(e)} value={blue}/>
        <ColorBox colors={colors}/>
        <center>
          <button onClick={() => this.handleColorChange()}>{started ? 'Stop' : 'Start'}</button>
        </center>

      </div>
    );
  }
}
