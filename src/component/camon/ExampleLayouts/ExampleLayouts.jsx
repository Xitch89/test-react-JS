import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './ExampleLayouts.module.css';
import { ThemeContext } from '../../Layout';

function ExampleLayouts({ grayText, yellowText }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes.exampleLayouts}>
      <p 
        className={theme === 'light' ? classes.exampleLayouts_coreLight : classes.exampleLayouts_coreDark}
      >
        {grayText}
      </p>
      <p className={theme === 'light' ? classes.bigYellowTextLight : classes.bigYellowTextDark}>{yellowText}</p>
    </div>
  );
}

ExampleLayouts.propTypes = {
  grayText: PropTypes.string.isRequired,
  yellowText: PropTypes.string.isRequired,
};

export default ExampleLayouts;
