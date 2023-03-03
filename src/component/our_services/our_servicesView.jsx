import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classes from './our_servicesView.module.css';

class PostOurServices extends Component {
  render() {
    const {
      upperSvg,
      lowerSvg,
      grayTextBig,
      grayTextSmall,
    } = this.props;
    return (
      <div>
        <div className={classes.ourServices_items}>
          <div className={classes.ourServices_vectorImg}>
            {upperSvg}
          </div>
          <div>
            {lowerSvg}
          </div>
          <p className={classes.ourServices_yellowText}>Web Design</p>
          <p className={classes.ourServices_grayText}>
            {grayTextBig}
          </p>
          <p className={classes.ourServices_graySmallText}>
            {grayTextSmall}
          </p>
        </div>
      </div>
    );
  }
}
PostOurServices.propTypes = {
  upperSvg: PropTypes.string.isRequired,
  lowerSvg: PropTypes.string.isRequired,
  grayTextBig: PropTypes.string.isRequired,
  grayTextSmall: PropTypes.string.isRequired,
};

export default PostOurServices;
