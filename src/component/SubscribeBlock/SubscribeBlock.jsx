import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './SubscribeBlock.module.css';
import { ThemeContext } from '../Layout';

function SubscribeBlock() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={classes.subscribeBlock}>
      <p 
        className={theme === 'light' ? classes.subscribeBlock_YellowTextLight : classes.subscribeBlock_YellowTextDark}
      >
        {t('subscribeToAtelier')}
        <br />
        {t('newsletter')}
      </p>
      <p className={theme === 'light' ? classes.subscribeBlock_someTextLight : classes.subscribeBlock_someTextDark}>
        {t('newsletterText')}
      </p>
      <form className={classes.subscribe} action="#" method="post">
        <input type="email" required />
        <button className={classes.subscribe_button} type="submit">
          {t('subscribeButton')}
        </button>
      </form>
      <p className={theme === 'light' ? classes.sub_expl_btnLight : classes.sub_expl_btnDark}>
        {t('termsAgreement')}
      </p>
    </div>
  );
}

export default SubscribeBlock;
