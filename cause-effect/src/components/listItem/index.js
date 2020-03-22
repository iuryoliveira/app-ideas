import React, { Component } from 'react';
import { ListItemStyle } from './styles';

export default class ListItem extends Component {
  render() {
    const { position, data, onClick, isSelected} = this.props;

    return(
      <ListItemStyle position={position} onClick={onClick} isSelected={isSelected}>
        <a href='./#'>{data.name}</a>
      </ListItemStyle>
    );
  }
}
