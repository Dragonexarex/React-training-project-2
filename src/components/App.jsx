import React, { Component } from 'react';
import Pagination from './Pagination.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        'Person1',
        'Person2',
        'Person3',
        'Person4',
        'Person5',
        'Person6',
        'Person7',
        'Person8',
        'Person9',
        'Person10',
        'Person11',
        'Person12',
        'Person13',
        'Person14',
        'Person15',
        'Person16',
        'Person17',
        'Person18',
        'Person19',
        'Person20'
      ]
    };
    this.generateList = this.generateList.bind(this);
  }

  generateList() {
    const { persons } = this.state;
    const everybody = persons.map(person => <li key={person}>{person}</li>);
    return everybody;
  }

  render() {
    return (
      <Pagination personPerPage={7}>
        {this.generateList()}
      </Pagination>
    );
  }
}

export default App;
