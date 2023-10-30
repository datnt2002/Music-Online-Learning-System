import { Avatar, Button, Divider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { PhoneOutlined, VideoCameraOutlined, SettingFilled, SmileOutlined, SyncOutlined } from '@ant-design/icons';
import TextMessage from './TextMessage';
import TextArea from 'antd/es/input/TextArea';

const ChatBox = () => {
  const currentUser = useSelector((state) => state.authentication.currentUser);
  console.log(currentUser);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex">
        <Avatar />
        <div>
          <PhoneOutlined />
          <VideoCameraOutlined />
        </div>
      </div>
      <div className="h-96 overflow-y-scroll">
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={false} />
        <TextMessage isOwn={true} />
        <TextMessage isOwn={false} />
      </div>
      <Divider />
      <div className="flex">
        <TextArea autoSize />
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default ChatBox;
