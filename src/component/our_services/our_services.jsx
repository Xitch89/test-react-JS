import React, { Component } from "react";
import classes from "./our_services.module.css";
// svg
import { ReactComponent as Square } from "../../assets/icons/square.svg";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";
import { ReactComponent as Hemisphere } from "../../assets/icons/hemisphere.svg";
import { ReactComponent as Hemisphere2 } from "../../assets/icons/hemisphere2.svg";
import { ReactComponent as Circle } from "../../assets/icons/circle.svg";
import { ReactComponent as Ruby } from "../../assets/icons/ruby.svg";

class OurServices extends Component {
  constructor(props){
    super(props);
    this.state = {
      grayTextBig1: 'Suspendisse varius enim in',
      grayTextSmall1: 'cursus id rutrum imperdiet. eros elementum tristique.',
      grayTextBig2: 'Suspendisse varius enim in',
      grayTextSmall2: 'cursus id rutrum imperdiet. eros elementum tristique.',
      grayTextBig3: 'Suspendisse varius enim in',
      grayTextSmall3: 'cursus id rutrum imperdiet. eros elementum tristique.'
    }
  }
  render() {
    const {grayTextBig1,
      grayTextSmall1,
      grayTextBig2,
      grayTextSmall2,
      grayTextBig3,
      grayTextSmall3} = this.state;
    return (
      <div>
        <div className={classes.ourServices_container}>
          <div className={classes.ourServices_wrapper}>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Square />
              </div>
              <div className={classes.ourServices_vectorImg2}>
                <Triangle />
              </div>

              <p className={classes.ourServices_yellowText}>Web Design</p>
              <p className={classes.ourServices_grayText}>
                {grayTextBig1}
              </p>
              <p className={classes.ourServices_graySmallText}>
                {grayTextSmall1}
              </p>
            </div>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Hemisphere />
              </div>
              <div className={classes.ourServices_vectorImg3}>
                <Hemisphere2 />
              </div>

              <p className={classes.ourServices_yellowText}>UI/UX Design</p>
              <p className={classes.ourServices_grayText}>
                {grayTextBig2}
              </p>
              <p className={classes.ourServices_graySmallText}>
                {grayTextSmall2}
              </p>
            </div>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Circle />
              </div>
              <div className={classes.ourServices_vectorImg4}>
                <Ruby />
              </div>
              <p className={classes.ourServices_yellowText}>SEO & Marketing</p>
              <p className={classes.ourServices_grayText}>
                {grayTextBig3}
              </p>
              <p className={classes.ourServices_graySmallText}>
                {grayTextSmall3}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;