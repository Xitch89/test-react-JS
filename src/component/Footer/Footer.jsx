import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webflow: '404',
      gitHubWey: 'https://github.com/Xitch89/ReactJS',
      figma:
        'https://www.figma.com/file/eukF6vHhGD51To79l661wN/Atelier.-%2B?node-id=1%3A2',
      author: 'https://www.facebook.com/profile.php?id=100006864884681',
    };
  }

  render() {
    const { 
      webflow, gitHubWey, figma, author 
    } = this.state;
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
}

export default Footer;
