import React from 'react';
import PropTypes from 'prop-types';
import classes from './SearchWeather.module.css';

class SearchWeather extends React.Component {
  render() {
    const { weatherMethod } = this.props;
    return (
      <div className={classes.formWrapper}>
        <img 
          className={classes.weatherImg} 
          src="https://thumbs.gfycat.com/UnpleasantBlandAfricanwildcat.webp" 
          alt="gif 404" 
        />
        <form className={classes.weatherForm} onSubmit={weatherMethod}>
          <input type="text" name="city" placeholder="Enter you city" />
          <button className={classes.weatherForm_button} type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}
SearchWeather.propTypes = {
  weatherMethod: PropTypes.func.isRequired,
};

export default SearchWeather;
