import React from 'react';
import { UserOutlined, SearchOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider } from 'antd';
const Post = () => {
  return (
    <div className="flex flex-1 flex-col bg-amber-200">
      <div className="flex bg-green-200">
        <Avatar icon={<UserOutlined />} />
        <h1>This is my name</h1>
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima excepturi ex eius nesciunt sequi quod, qui
        impedit harum repellat, ab doloribus dicta necessitatibus maiores unde pariatur. Pariatur sint minus sit!
      </div>
    </div>
  );
};

export default Post;
