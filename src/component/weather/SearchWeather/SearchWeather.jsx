import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classes from './SearchWeather.module.css';

function SearchWeather({ weatherMethod }) {
  const { t } = useTranslation();
  return (
    <div className={classes.formWrapper}>
      <img 
        className={classes.weatherImg} 
        src="https://thumbs.gfycat.com/UnpleasantBlandAfricanwildcat.webp" 
        alt="gif 404" 
      />
      <form className={classes.weatherForm} onSubmit={weatherMethod}>
        <input type="text" name="city" placeholder={t('enterCity')} />
        <button className={classes.weatherForm_button} type="submit"> 
          {t('search')}
        </button>
      </form>
    </div>
  );
}
SearchWeather.propTypes = {
  weatherMethod: PropTypes.func.isRequired,
};

export default SearchWeather;
