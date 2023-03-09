import React, { Component } from 'react';
import classes from './ErrorPage.module.css';

class ErrorPage extends Component {
  render() {
    return (
      <div className={classes.error_page_container}>
        <div className={classes.error_page}>
          <h1>Oops !</h1>
          <p className={classes.error_massage}>page not found</p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
