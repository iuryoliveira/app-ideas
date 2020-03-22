import React, { Component } from 'react';
import { Div } from './styles';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return(
      <Div></Div>
    );
  }
}
