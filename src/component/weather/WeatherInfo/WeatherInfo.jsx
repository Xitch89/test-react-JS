import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './WeatherInfo.module.css';
import { ThemeContext } from '../../Layout';

function WeatherInfo({
  humidity, city, temp, wind, error 
}) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? classes.weatherResultLight : classes.weatherResultDark}>
      { city && (
      <div>
        <p>
          {t('city')}
          {' '}
          {city}
        </p>
        <p>
          {t('temp')}
          {' '}
          {temp} 
          °C
        </p>
        <p>
          {t('wind')}
          {' '}
          {wind}
        </p>
        <p>
          {t('humidity')}
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
