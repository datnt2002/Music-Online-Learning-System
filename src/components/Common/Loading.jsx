import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
const Loading = () => {
  return (
    <div class="flex items-center justify-center w-full h-full">
      <div class="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
        <div>Loading ...</div>
      </div>
    </div>
  );
};

export default Loading;
