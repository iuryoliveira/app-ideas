import React, { Component } from 'react';

export default class Article extends Component {
  render() {
    const { selectedPerson } = this.props;
    return(
      <div>
        <article>
          <h2>{selectedPerson.name}</h2>
          <p>Euclides da Cunha</p>
          <p>55(31)99999-5555</p>
          <p>08/05/1997</p>
        </article>
      </div>
    );
  }
}
