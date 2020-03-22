import React, { Component } from 'react';
import { Div } from './styles';

export default class ColorBox extends Component {
  render() {
    const { colors } = this.props;
    return(
      <Div colors={colors}></Div>
    );
  }
}
