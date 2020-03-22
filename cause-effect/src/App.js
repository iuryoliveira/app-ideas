import React, { Component } from 'react';
import Article from './components/article';
import ListItem from './components/listItem';

import { HeaderList } from './styles';

import peopleData from './data';

export default class App extends Component {
  state = {
    people: peopleData,
    selectedPerson: 0,
  };

  handleSelection = async (data, position) => {
    await this.setState({ selectedPerson: position });
  }

  render() {
    const { people, selectedPerson } = this.state;

    return (
      <div className="App">
        <center>
          <h1>ReactJS</h1>
          <HeaderList>
            {people.map((data, i) => {
              return (
                <ListItem key={i} position={i} data={data}
                onClick={() => this.handleSelection(data, i)}
                isSelected={selectedPerson === i ? true : false}/>
              )
            })}
          </HeaderList>
        </center>

        <Article selectedPerson={people[selectedPerson]}/>
      </div>
    );
  }
}
