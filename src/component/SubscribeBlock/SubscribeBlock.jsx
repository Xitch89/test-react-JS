import React, { useContext } from 'react';
import classes from './SubscribeBlock.module.css';
import { ThemeContext } from '../Layout';

function SubscribeBlock() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes.subscribeBlock}>
      <p 
        className={theme === 'light' ? classes.subscribeBlock_YellowTextLight : classes.subscribeBlock_YellowTextDark}
      >
        Subscribe to Atelier 
        <br />
        Newsletter
      </p>
      <p className={theme === 'light' ? classes.subscribeBlock_someTextLight : classes.subscribeBlock_someTextDark}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <form className={classes.subscribe} action="#" method="post">
        <input type="email" required />
        <button className={classes.subscribe_button} type="submit">
          “Subscribe”
        </button>
      </form>
      <p className={theme === 'light' ? classes.sub_expl_btnLight : classes.sub_expl_btnDark}>
        * By clicking button, you agree to our terms and that you have read
        our terms
      </p>
    </div>
  );
}

export default SubscribeBlock;
