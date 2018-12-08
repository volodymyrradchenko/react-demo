import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default function Comment({ comment }) {
  return (
    <article>
      <h4>{comment.user}</h4>
      <p>{comment.text}</p>
    </article>
  );
}
