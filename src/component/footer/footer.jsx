import React, { Component } from "react";
import classes from "./footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webflow: "#",
      gitHubWey: "https://github.com/Xitch89/ReactJS",
      figma:
        "https://www.figma.com/file/eukF6vHhGD51To79l661wN/Atelier.-%2B?node-id=1%3A2",
      author: "Andrii Oliinyk",
    };
  }
  render() {
    const { webflow, gitHubWey, figma, author } = this.state;
    return (
      <div className={classes.footer}>
        <div className={classes.footer_container}>
          <div className={classes.footer_powered}>
            <p>Powered by</p>
            <a href={webflow}>Webflow</a>
          </div>
          <div className={classes.footer_rightRef}>
            <a href={gitHubWey}>GitHub</a>
            <a className={classes.footer_rightRefBorder} href={figma}>
              Figma
            </a>
            <a href={author}>author: Andrii Oliinyk</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;