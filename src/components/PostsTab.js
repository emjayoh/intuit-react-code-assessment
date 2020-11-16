import React from 'react';
import { List, ListItem, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PostsTab = ({ postsData }) => (
  <List>
    {postsData.map((post) => (
      <ListItem key={post.id} style={{ padding: '10px', marginBottom: '10px' }}>
        <Text fontWeight="bold" fontSize="md" style={{ marginBottom: '5px' }}>
          {post.title}
        </Text>
        <Text fontSize="sm" style={{ paddingBottom: '10x' }}>
          {post.body}
        </Text>
        {/* <Divider /> */}
      </ListItem>
    ))}
  </List>
);

PostsTab.propTypes = {
  postsData: PropTypes.array.isRequired,
};

export default PostsTab;
