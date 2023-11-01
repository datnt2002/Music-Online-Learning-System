import { Avatar, Button, Divider, Form } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneOutlined, VideoCameraOutlined } from '@ant-design/icons';
import TextMessage from './TextMessage';
import TextArea from 'antd/es/input/TextArea';
import { addArrivalMessage, getConservationAction, sendMessageAction } from '../../../../redux/slice/forumSlice';
import { io } from 'socket.io-client';

const ChatBox = ({ receiverId }) => {
  const dispatch = useDispatch();
  const socket = useRef();
  const currentUser = useSelector((state) => state.authentication.currentUser);
  console.log(currentUser);
  const contents = useSelector((state) => state.forum.content);

  useEffect(() => {
    socket.current = io('http://localhost:5000');

    socket.current.on('msg-recieve', (msg) => {
      dispatch(
        addArrivalMessage({
          content: msg,
          senderId: receiverId,
        })
      );
    });

    // return () => {
    //   // Clean up socket when the component unmounts
    //   socket.current.disconnect();
    // };
  }, []);

  useEffect(() => {
    socket.current.emit('add-user', currentUser?.id);
  }, [currentUser]);

  useEffect(() => {
    dispatch(getConservationAction({ receiverId }));
  }, []);

  const conversationId = useSelector((state) => state.forum.conversationId);

  const handleSendMessage = (values) => {
    console.log(currentUser?.id);
    console.log(values.mess);
    socket.current.emit('send-msg', {
      to: receiverId,
      from: currentUser?.id,
      msg: values.mess,
    });

    dispatch(
      sendMessageAction({
        receiverId: receiverId,
        conversationId: conversationId,
        content: values.mess,
      })
    );
  };

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [contents]);

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
        {contents &&
          contents.length > 0 &&
          contents.map((content, index) => {
            const isOwn = content?.senderId === currentUser?.id;
            return (
              <div ref={scrollRef}>
                <TextMessage text={content.content} isOwn={isOwn} />
              </div>
            );
          })}
      </div>
      <Divider />
      <div className="flex">
        <Form onFinish={handleSendMessage}>
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
