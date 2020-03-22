import React, { Component } from 'react';
import { Div } from './styles';

export default class ColorBox extends Component {
  state = {
    colors: this.props.colors
  }

  componentDidUpdate(prevProps) {
    let prev = JSON.stringify(prevProps);
    let props = JSON.stringify(this.props);
    if(prev != props) {
      this.updateAndNotify();
    }
  }

  updateAndNotify = async () => {
    await this.setState({ colors: this.props });
  }

  render() {
    const { colors } = this.state;
    return(
      <Div colors={colors}></Div>
    );
  }
}
