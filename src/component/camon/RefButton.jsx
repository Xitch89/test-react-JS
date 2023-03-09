import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class RefButton extends React.Component {
  render() {
    const { 
      linkText, classLink 
    } = this.props;
    return (
      <Link className={classLink} to="404">
        {linkText}
      </Link>
    );
  }
}
RefButton.propTypes = {
  linkText: PropTypes.string.isRequired,
  classLink: PropTypes.string.isRequired,
};

export default RefButton;
