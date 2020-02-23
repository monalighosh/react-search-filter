import React, {Component} from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {
    people: [],
    searchValue: '',
  };

  async componentDidMount () {
    try {
      const peopleAPIResponse = await fetch("https://randomuser.me/api/1.3/?results=18&inc=name,gender,picture,email,location&nat=au,nz,gb,us,ie,ca,nl");
      const peopleJSON = await peopleAPIResponse.json();
      const people = await peopleJSON.results;
      this.setState({ people });
    } catch (error) {
      console.error(error)
    }
  }

  handleSearch = (e) => {
    return this.setState({ searchValue: e.target.value });
  }
 
  render() {
    const { people, searchValue } = this.state;
    const filteredPeople = people.filter(person => {
      const fullName = `${person.name.first} ${person.name.last}`.toLowerCase();
      const val = searchValue.toLowerCase();
      return fullName.includes(val);
    });

    return (
      <div className="App">
        <div>
          <h1>People Finder</h1>
          <SearchBar placeholder="Enter a name" onSearchChange={this.handleSearch} />
        </div>
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
