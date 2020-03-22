import React, { Component } from 'react';
import { Div } from './styles';

export default class ColorInput extends Component {
  render() {
    const { color, onChange, value } = this.props;

    return(
      <Div>
        <label>{color}</label><input type="text" onChange={onChange} value={value}/>
      </Div>
    );
  }
}

