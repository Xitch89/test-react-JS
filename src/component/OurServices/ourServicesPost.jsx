import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './css/ourServicesPost.module.css';
import { ThemeContext } from '../Layout';

function PostOurServices({ 
  upperSvg, lowerSvg, 
}) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

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
          {t('webDes')}

        </p>
        <p className={theme === 'light' ? classes.ourServices_grayTextLight : classes.ourServices_grayTextDark}>
          {t('grayTextBig')}
        </p>
        <p 
          className={theme === 'light' ? classes.ourServices_graySmallTextLight : classes.ourServices_graySmallTextDark}
        >
          {t('grayTextSmall')}
        </p>
      </div>
    </div>
  );
}

PostOurServices.propTypes = {
  upperSvg: PropTypes.string.isRequired,
  lowerSvg: PropTypes.string.isRequired,
};

export default PostOurServices;
