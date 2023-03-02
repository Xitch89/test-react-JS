import React from 'react';
import PropTypes from 'prop-types';
import classes from './detail_page.module.css';

class DetailedPage extends React.Component {
  render() {
    const { weyImage, mainText, sumText } = this.props;
    return (
      <div className={classes.detail}>
        <img className={classes.image} src={weyImage} alt="404" />
        <h1>{mainText}</h1>
        <p className={classes.smallText}>{sumText}</p>
      </div>
    );
  }
}
DetailedPage.propTypes = {
  weyImage: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  sumText: PropTypes.string.isRequired,
};

export default DetailedPage;
