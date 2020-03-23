import React, { Component } from 'react';
import { Div } from './styles';

export default class ColorBox extends Component {
  state = {
    colors: this.props.colors,
    colorsRgb: this.props.colorsRgb,
    useRgb: this.props.useRgb
  }

  componentDidUpdate(prevProps) {
    if(prevProps != this.props) {
      this.updateAndNotify();
    }
  }

  updateAndNotify = async () => {
    await this.setState({ colors: this.props.colors, colorsRgb: this.props.colorsRgb,
    useRgb: this.props.useRgb });
  }

  render() {
    const { colors, colorsRgb, useRgb } = this.state;
    return(
      <Div colors={useRgb ? colorsRgb : colors}></Div>
    );
  }
}
