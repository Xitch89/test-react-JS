import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherInfo.module.css';

function WeatherInfo({
  humidity, city, temp, wind, error 
}) {
  return (
    <div className={classes.weatherResult}>
      { city && (
      <div>
        <p>
          City:
          {' '}
          {city}
        </p>
        <p>
          Temp:
          {' '}
          {temp} 
          °C
        </p>
        <p>
          Wind:
          {' '}
          {wind}
        </p>
        <p>
          Humidity:
          {' '} 
          {humidity}
        </p>
      </div>
      )}
      <p>
        {error}
      </p>
    </div>
  );
}
WeatherInfo.propTypes = {
  humidity: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

export default WeatherInfo;
