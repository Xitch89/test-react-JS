import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import classes from './css/ourServicesPost.module.css';
import { ThemeContext } from '../Layout';

function PostOurServices({ 
  upperSvg, lowerSvg, grayTextBig, grayTextSmall 
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className={classes.ourServices_items}>
        <div className={classes.ourServices_vectorImg}>
          {upperSvg}
        </div>
        <div>
          {lowerSvg}
        </div>
        <p 
          className={theme === 'light' ? classes.ourServices_yellowTextLight : classes.ourServices_yellowTextDark}
        >
          Web Design

        </p>
        <p className={theme === 'light' ? classes.ourServices_grayTextLight : classes.ourServices_grayTextDark}>
          {grayTextBig}
        </p>
        <p 
          className={theme === 'light' ? classes.ourServices_graySmallTextLight : classes.ourServices_graySmallTextDark}
        >
          {grayTextSmall}
        </p>
      </div>
    </div>
  );
}

PostOurServices.propTypes = {
  upperSvg: PropTypes.string.isRequired,
  lowerSvg: PropTypes.string.isRequired,
  grayTextBig: PropTypes.string.isRequired,
  grayTextSmall: PropTypes.string.isRequired,
};

export default PostOurServices;
