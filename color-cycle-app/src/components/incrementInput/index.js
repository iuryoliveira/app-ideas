import React, { Component } from 'react';
import { Div } from './styles';

export default class IncrementInput extends Component {
  render() {
    const { onChange, value } = this.props;

    return(
      <Div>
        <label>Increment</label><input type="text" maxLength={2} onChange={onChange} value={value}/>
      </Div>
    );
  }
}

