import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function RefButton({ linkText, classLink }) {
  return (
    <Link className={classLink} to="404">
      {linkText}
    </Link>
  );
}

RefButton.propTypes = {
  linkText: PropTypes.string.isRequired,
  classLink: PropTypes.string.isRequired,
};

export default RefButton;
