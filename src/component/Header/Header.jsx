import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.wrapper}>
      <header>
        <div>
          <nav className={classes.navBar}>
            <div className={classes.toggleMenu}>
              <div className="line line1" />
              <div className="line line2" />
              <div className="line line3" />
            </div>
              
            <ul className={classes.navList}>
              <li>
                <Link className={classes.transparent_header_logo} to="/">
                  Atelier.
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_overview} to="404">
                  Overview
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  Pages
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  Template
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link className={classes.transparent_header_buyTemplate} to="404">
          Buy Template
        </Link>
      </header>
    </div>
  );
}

export default Header;
