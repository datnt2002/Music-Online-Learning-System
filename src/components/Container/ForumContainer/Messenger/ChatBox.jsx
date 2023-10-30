import { Avatar, Button, Divider, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneOutlined, VideoCameraOutlined, SettingFilled, SmileOutlined, SyncOutlined } from '@ant-design/icons';
import TextMessage from './TextMessage';
import TextArea from 'antd/es/input/TextArea';
import { getConservationAction } from '../../../../redux/slice/forumSlice';

const ChatBox = ({ receiverId }) => {
  const currentUser = useSelector((state) => state.authentication.currentUser);

  const dispatch = useDispatch();
  console.log(receiverId);
  useEffect(() => {
    dispatch(getConservationAction({ receiverId }));
  }, []);

  const messages = useSelector((state) => state.forum.messages);
  console.log(messages);
  const handleSendMessage = (values) => {
    console.log(values);
  };
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
        {messages.map((message) => {
          const isOwn = message?.senderId === currentUser?.user?.id;
          return <TextMessage text={message.content} isOwn={isOwn} />;
        })}
      </div>
      <Divider />
      <div className="flex">
        <Form name="basic" onFinish={handleSendMessage}>
          <Form.Item name="mess">
            <TextArea autoSize />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChatBox;
