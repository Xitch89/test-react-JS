import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './SocRef.module.css';
// svg
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Linked } from '../../assets/icons/linked.svg';

class SocRef extends Component {
  render() {
    return (
      <div className={classes.socRef}>
        <Link to="404">
          <Facebook className={classes.socSvg} />
        </Link>
        <Link to="404">
          <Twitter className={classes.socSvg} />
        </Link>
        <Link to="404">
          <Instagram className={classes.socSvg} />
        </Link>
        <Link to="404">
          <Linked className={classes.socSvg} />
        </Link>
      </div>
    );
  }
}

export default SocRef;
