import React, { Component } from 'react';
import PostOurServices from './our_servicesView';
import classes from './our_services.module.css';
// svg
import { ReactComponent as Square } from '../../assets/icons/square.svg';
import { ReactComponent as Triangle } from '../../assets/icons/triangle.svg';
import { ReactComponent as Hemisphere } from '../../assets/icons/hemisphere.svg';
import { ReactComponent as Hemisphere2 } from '../../assets/icons/hemisphere2.svg';
import { ReactComponent as Circle } from '../../assets/icons/circle.svg';
import { ReactComponent as Ruby } from '../../assets/icons/ruby.svg';

class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourServicesDate: [
        { 
          upperSvg: <Square style={{ margin: '60px 0 0 61px' }} />,
          lowerSvg: <Triangle style={{ 
            position: 'relative', left: '58px', top: '-21px' 
          }} 
          />,
          grayTextBig: 'Suspendisse varius enim in',
          grayTextSmall: 'cursus id rutrum imperdiet. eros elementum tristique.',
        },
        { 
          upperSvg: <Hemisphere style={{ position: 'relative', margin: '60px 0 0 61px', zIndex: '1' }} />,
          lowerSvg: <Hemisphere2 style={{ 
            position: 'relative', left: '80px', top: '-45px' 
          }} 
          />, 
          grayTextBig: 'Suspendisse varius enim in',
          grayTextSmall: 'cursus id rutrum imperdiet. eros elementum tristique.',
        },
        { 
          upperSvg: <Ruby style={{ margin: '60px 0 0 61px' }} />,
          lowerSvg: <Circle style={{
            position: 'relative', left: '63px', top: '-30px' 
          }} 
          />,
          grayTextBig: 'Suspendisse varius enim in',
          grayTextSmall: 'cursus id rutrum imperdiet. eros elementum tristique.',
        }
      ]
    };
  }

  render() {
    const { 
      ourServicesDate
    } = this.state;

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
