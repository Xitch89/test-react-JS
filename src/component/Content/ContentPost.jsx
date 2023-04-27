import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './css/ContentPost.module.css';

function Post(props) {
  const [imageRef] = useState('/example-page/');
  const { 
    image, massage, date, postRef 
  } = props;
  
  return (
    <>
      <Link to={`${imageRef}${postRef}`}>
        <img src={image} alt="404" />
      </Link>
      <Link
        to={`${imageRef}${postRef}`}
        className={classes.layoutsItems_refImg}
      >
        {massage}
      </Link>
      <p className={classes.date}>{date}</p>
    </>
  );
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  massage: PropTypes.string.isRequired,
  postRef: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
