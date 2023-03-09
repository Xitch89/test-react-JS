import React, { Component } from 'react';
import PostOurServices from './ourServicesPost';
import classes from './css/OurServices.module.css';
import ourServicesDate from '../../constants/ourServicesDate';

class OurServices extends Component {
  render() {
    const newOurServices = ourServicesDate.map((services) => (
      <PostOurServices
        upperSvg={services.upperSvg}
        lowerSvg={services.lowerSvg}
        grayTextBig={services.grayTextBig}
        grayTextSmall={services.grayTextSmall}
      />
    ));
    return (
      <div className={classes.ourServices_container}>
        <div className={classes.ourServices_wrapper}>
          {newOurServices}
        </div>
      </div>
    );
  }
}

export default OurServices;
