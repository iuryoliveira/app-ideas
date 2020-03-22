import React, { Component } from 'react';
import { Div } from './styles';

export default class ColorInput extends Component {
  render() {
    const { color } = this.props;
    return(
      <Div>
        <label>{color}</label><input type="text" />
      </Div>
    );
  }
}

