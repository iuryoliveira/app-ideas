import React, { Component } from 'react';
import { ListItemStyle } from './styles';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { position, data, onClick, isSelected} = this.props;

    return(
      <ListItemStyle position={position} onClick={onClick} isSelected={isSelected}>
        <a href='./#'>{data.name}</a>
      </ListItemStyle>
    );
  }
}
