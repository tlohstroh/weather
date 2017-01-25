import React from 'react';
import { Component } from 'react';


import SearchBar from '../containers/search_bar';
import WeathterList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeathterList />
      </div>
    );
  }
}
