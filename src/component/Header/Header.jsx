import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import classes from './Header.module.css';

function Header({ toggleTheme, theme }) {
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
        <div className={classes.themeMode}>
          <label 
            htmlFor="switchMode" 
            className={classes.switchLabel}
          >
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </label>
          <ReactSwitch id="switchMode" onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        <Link className={classes.transparent_header_buyTemplate} to="404">
          Buy Template
        </Link>
      </header>
    </div>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};
Header.defaultProps = {
  theme: 'dark',
};

export default Header;
