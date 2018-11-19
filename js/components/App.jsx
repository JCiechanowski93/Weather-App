import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar.jsx';
import WeatherList from '../containers/WeatherList.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
