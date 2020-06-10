// Code MovieReviews Here
import React from 'react';
import Review from './Review'

const MovieReviews = (props) => <div className="review-list">{props.reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;