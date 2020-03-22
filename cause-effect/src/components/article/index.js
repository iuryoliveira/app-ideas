import React, { Component } from 'react';
import { ArticleData } from './styles';

export default class Article extends Component {
  render() {
    const { selectedPerson } = this.props;
    return(
      <div>
        <ArticleData>
          <h2>{selectedPerson.name}</h2>
          <p>{selectedPerson.street}</p>
          <p>{selectedPerson.telephone}</p>
          <p>{selectedPerson.birthDate}</p>
        </ArticleData>
      </div>
    );
  }
}
