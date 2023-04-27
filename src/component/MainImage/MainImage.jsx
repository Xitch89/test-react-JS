import React from 'react';
import RefButton from '../camon/RefButton';
import classes from './MainImage.module.css';

function MainImage() {
  return (
    <div className={classes.mainImage}>
      <p className={classes.mainImage_smallTitleText}>
        WE ARE Atelier Creative Agency
      </p>
      <h1 className={classes.mainImage_titleText}>
        Unique UI Kit Template for
        <br />
        Creative Agencies
      </h1>
      <RefButton classLink={classes.mainImage_linkLayout} linkText="VIEW LAYOUTS" />
    </div>
  );
}

export default MainImage;
