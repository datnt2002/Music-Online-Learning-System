import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <>
      <CreatePost />
      <Post />;
    </>
  );
};

export default Feed;
