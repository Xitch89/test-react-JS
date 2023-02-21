import React, { Component } from "react";
import classes from "./follow_social.module.css";
//images
import soc_img from "../../assets/images/soc_img.jpg";
import soc_img2 from "../../assets/images/soc_img2.jpg";
import soc_img4 from "../../assets/images/soc_img4.jpg";
import soc_img3 from "../../assets/images/soc_img3.jpg";
import { ReactComponent as InstaImg } from "../../assets/icons/insta-img.svg";
import RefButton from "../camon/refButton";

class FollowSocial extends Component {
  render() {
    return (
      <div className={classes.followSocial_container}>
        <div className={classes.followSocial_wrapper}>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img2}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items_followMe}>
            <p className={classes.followSocial_yellowText}>Follow me on</p>
            <RefButton classLink={classes.followSocial_linkInsta} linkText="Instagram" />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img3}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img4}
              alt="404"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FollowSocial;