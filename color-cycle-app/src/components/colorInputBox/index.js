import React, { Component } from 'react';
import './styles';

import ColorInput from '../colorInput';

export default class ColorInputBox extends Component {
  render() {
    return(
      <div>
        <ColorInput color="Red"/>
        <ColorInput color="Green"/>
        <ColorInput color="Blue"/>
      </div>
    );
  }
}

