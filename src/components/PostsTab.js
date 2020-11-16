import React from 'react';
import PropTypes from 'prop-types';

const PostsTab = ({ postsData }) => (
  <ul>
    {postsData.map((post) => (
      <li key={post.id}>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
);

PostsTab.propTypes = {
  postsData: PropTypes.array.isRequired,
};

export default PostsTab;
