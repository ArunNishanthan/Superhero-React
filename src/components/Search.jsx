import React, { Component } from 'react';
import axios from 'axios';
import Hero from './Hero';

class Search extends Component {
  state = { name: '', heros: [] };
  // Reference https://superheroapi.com/
  apiEndPoint = `https://superheroapi.com/api/apikey/`;

  handleChange = async (e) => {
    const name = e.target.value;
    this.setState({ name }, () => this.getresults());
  };

  getresults = async () => {
    const results = await axios.get(
      `${this.apiEndPoint}/search/${this.state.name}`
    );
    if (results.data.response === 'success') {
      if (this.state.name === results.data['results-for']) {
        this.setState({ heros: results.data.results });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="mb-3">
          <input
            type="text"
            name="search"
            placeholder="Search your Hero....."
            className="form-control"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className="row">
          {this.state.heros.map((hero) => (
            <Hero key={hero.id} data={hero} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
