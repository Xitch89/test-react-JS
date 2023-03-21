import React from 'react';

class SearchWeather extends React.Component {
  render() {
    return (
      <form onSubmit={this.weatherMethod}>
        <input type="text" name="city" placeholder="Enter you city" />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

export default SearchWeather;
