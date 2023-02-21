import React, { Component } from "react";
import classes from "./soc_ref.module.css";
//svg
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Link } from "../../assets/icons/link.svg";

class SocRef extends Component {
  render() {
    return (
      <div className={classes.socRef}>
        <a href="#">
          <Facebook className={classes.socSvg} />
        </a>
        <a href="#">
          <Twitter className={classes.socSvg} />
        </a>
        <a href="#">
          <Instagram className={classes.socSvg} />
        </a>
        <a href="#">
          <Link className={classes.socSvg} />
        </a>
      </div>
    );
  }
}

export default SocRef;