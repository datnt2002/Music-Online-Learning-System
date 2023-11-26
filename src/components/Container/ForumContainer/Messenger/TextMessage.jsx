import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

const TextMessage = ({ isOwn, text }) => {
  return (
    <div className={isOwn ? 'flex flex-row-reverse p-1' : 'flex p-1'}>
      <Avatar className="ml-1" icon={<UserOutlined />} />
      <p className={`py-2 px-3 rounded-2xl max-w-3xl break-words ${isOwn ? 'bg-gray-200' : 'bg-red-200'} `}>{text}</p>
    </div>
  );
};

export default TextMessage;
