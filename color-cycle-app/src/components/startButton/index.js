import React, { Component } from 'react';

import { Div } from './styles';

export default class StartButton extends Component {
  render() {
    const { started, onClick } = this.props;

    return(
      <Div>
        <button onClick={onClick}>{started ? 'Stop' : 'Start'}</button>
      </Div>
    );
  }
}
