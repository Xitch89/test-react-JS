import React, { Component } from "react";
import classes from "./example_layouts.module.css";

class ExampleLayouts extends Component {
  render() {
    const {grayText, yellowText} = this.props;
    return (
      <div className={classes.exampleLayouts}>
        <p className={classes.exampleLayouts_core}>{grayText}</p>
        <p className={classes.bigYellowText}>{yellowText}</p>
      </div>
    );
  }
}

export default ExampleLayouts;