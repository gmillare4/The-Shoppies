import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import { Nominations, SearchBar, SearchResults } from "./components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchParam: "",
      searchResults: [],
      nominations: [],
      banner: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.nominate = this.nominate.bind(this);
    this.remove = this.remove.bind(this);
  }

  search(event) {
    event.preventDefault();
    fetch(
      `http://www.omdbapi.com/?s=${this.state.searchParam}&page=1&apikey=807abc94`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ searchResults: data.Search }));
  }

  handleChange = (event) => {
    this.setState({ searchParam: event.target.value });
  };

  nominate(event) {
    let canNominate = true;
    for (let j = 0; j < this.state.nominations.length; j++) {
      if (this.state.nominations[j].imdbID === event.target.value) {
        canNominate = false;
      }
    }
    if (this.state.nominations.length === 5) {
      canNominate = false;
    }
    if (canNominate) {
      for (let i = 0; i < this.state.searchResults.length; i++) {
        if (this.state.searchResults[i].imdbID === event.target.value) {
          this.setState({
            nominations: [
              ...this.state.nominations,
              this.state.searchResults[i],
            ],
          });
        }
      }
    }
  }

  remove(event) {
    let newNominations = this.state.nominations.filter(
      (nomination) => nomination.imdbID !== event.target.value
    );
    this.setState({
      nominations: newNominations,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.nominations !== prevState.nominations) {
      if (this.state.nominations.length === 5) {
        this.setState({ banner: true });
      } else {
        this.setState({ banner: false });
      }
    }
  }

  render() {
    let banner;
    if (this.state.banner) {
      banner = <h4>Banner</h4>;
    }
    return (
      <div className="App">
        {banner}
        <h1>The Shoppies</h1>
        <Nominations
          nominations={this.state.nominations}
          remove={this.remove}
        />
        <SearchBar
          search={this.search}
          searchparam={this.state.searchParam}
          handleChange={this.handleChange}
        />
        <SearchResults
          searchResults={this.state.searchResults}
          nominate={this.nominate}
        />
      </div>
    );
  }
}
