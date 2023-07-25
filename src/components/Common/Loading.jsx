import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
const Loading = () => {
  return (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
      className="relative top-1/2 bg-gray-400 mx-auto"
    />
  );
};

export default Loading;
