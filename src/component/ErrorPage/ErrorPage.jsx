import React from 'react';
import classes from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={classes.error_page_container}>
      <div className={classes.error_page}>
        <h1>Oops !</h1>
        <p className={classes.error_massage}>page not found</p>
      </div>
    </div>
  );
}

export default ErrorPage;
