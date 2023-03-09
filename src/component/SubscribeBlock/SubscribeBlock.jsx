import React, { Component } from 'react';
import classes from './SubscribeBlock.module.css';

class SubscribeBlock extends Component {
  render() {
    return (
      <div className={classes.subscribeBlock}>
        <p className={classes.subscribeBlock_bigYellowText}>
          Subscribe to Atelier 
          <br />
          Newsletter
        </p>
        <p className={classes.subscribeBlock_someText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <form className={classes.subscribe} action="#" method="post">
          <input type="email" required />
          <button className={classes.subscribe_button} type="submit">
            “Subscribe”
          </button>
        </form>
        <p className={classes.subscribeBlock_explanationButton}>
          * By clicking button, you agree to our terms and that you have read
          our terms
        </p>
      </div>
    );
  }
}

export default SubscribeBlock;
