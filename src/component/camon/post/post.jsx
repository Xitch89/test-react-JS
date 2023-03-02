import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './post.module.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageRef: '/example_page/'
    };
  }

  render() {
    const { imageRef } = this.state;
    const { 
      image, massage, id, date 
    } = this.props;
    return (
      <div className={classes.layoutsItems}>
        <Link to={`${imageRef}${id}`}>
          <img src={image} alt="404" />
        </Link>
        <Link
          to={`${imageRef}${id}`}
          className={classes.layoutsItems_refImg}
        >
          {massage}
        </Link>
        <p className={classes.date}>{date}</p>
      </div>
    );
  }
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  massage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
