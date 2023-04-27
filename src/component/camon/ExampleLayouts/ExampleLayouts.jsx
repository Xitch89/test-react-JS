import React from 'react';
import PropTypes from 'prop-types';
import classes from './ExampleLayouts.module.css';

function ExampleLayouts({ grayText, yellowText }) {
  return (
    <div className={classes.exampleLayouts}>
      <p className={classes.exampleLayouts_core}>{grayText}</p>
      <p className={classes.bigYellowText}>{yellowText}</p>
    </div>
  );
}

ExampleLayouts.propTypes = {
  grayText: PropTypes.string.isRequired,
  yellowText: PropTypes.string.isRequired,
};

export default ExampleLayouts;
