import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

function Footer() {
  const webflow = '404';
  const gitHubWey = 'https://github.com/Xitch89/ReactJS';
  const figma = 'https://www.figma.com/file/eukF6vHhGD51To79l661wN/Atelier.-%2B?node-id=1%3A2';
  const author = 'https://www.facebook.com/profile.php?id=100006864884681';

  return (
    <div className={classes.footer}>
      <div className={classes.footer_container}>
        <div className={classes.footer_powered}>
          <p>Powered by</p>
          <Link to={webflow}>Webflow</Link>
        </div>
        <div className={classes.footer_rightRef}>
          <Link to={gitHubWey}>GitHub</Link>
          <Link className={classes.footer_rightRefBorder} to={figma}>
            Figma
          </Link>
          <Link to={author}>author: Andrii Oliinyk</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
