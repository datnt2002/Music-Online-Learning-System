import { Avatar } from 'antd';
import React from 'react';

const TextMessage = ({ isOwn }) => {
  return (
    <div className={isOwn ? 'flex flex-row-reverse' : 'flex'}>
      <Avatar />
      <p className={`p-2 rounded-2xl ${isOwn ? 'bg-gray-200' : 'bg-red-200'} `}>This is message</p>
    </div>
  );
};

export default TextMessage;
