import React, { Component } from 'react';
import Article from './components/article';

import { HeaderList } from './styles';

export default class App extends Component {
  state = {
    people: [
      {
        name: 'Iury Oliveira',
        street: 'Euclides da Cunha',
        country: 'Brazil',
        telephone: '(31)99999-5555',
        birthDate: '08/05/1997'
      },
      {
        name: 'Phil Collins',
        street: 'Georgy Street',
        country: 'USA',
        telephone: '(31)99999-5555',
        birthDate: '24/05/1997'
      },
      {
        name: 'George Silva',
        street: 'Paul Boutcosta',
        country: 'Brazil',
        telephone: '(31)95555-9999',
        birthDate: '09/05/1995'
      }
    ],

    selectedPerson: 0
  };

  handleSelection = async (data, position) => {
    console.log(`loading data for ${data.name}`);
    await this.setState({ selectedPerson: position })
  }

  render() {
    const { people, selectedPerson } = this.state;

    return (
      <div className="App">
        <center>
          <h1>ReactJS</h1>
          <HeaderList>
            {people.map((data, i) => {
              return (<li key={i} onClick={() => this.handleSelection(data, i)}><a href='./#'>{data.name}</a></li>)
            })}
          </HeaderList>
        </center>

        <Article selectedPerson={people[selectedPerson]}/>
      </div>
    );
  }
}
