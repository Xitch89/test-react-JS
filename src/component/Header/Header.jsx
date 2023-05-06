import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.css';

function Header({ toggleTheme, theme }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };
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
                  {t('atelier')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_overview} to="404">
                  {t('overview')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('pages')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('template')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('contact')}
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
            {theme === 'dark' ? t('darkMode') : t('lightMode')}
          </label>
          <ReactSwitch id="switchMode" onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        <Link className={classes.transparent_header_buyTemplate} to="404">
          {t('buyTemplate')}
        </Link>
        <button 
          key={i18n.language} 
          type="button" 
          className={classes.leng} 
          onClick={() => changeLanguage(i18n.language === 'en' ? 'ua' : 'en')}
        >
          {i18n.language.toUpperCase()}
        </button>
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
