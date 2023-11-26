import { Avatar, Button, Divider, Form } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import TextMessage from './TextMessage';
import TextArea from 'antd/es/input/TextArea';
import { io } from 'socket.io-client';

import { addArrivalMessage, getConservationAction, sendMessageAction } from '../../../../redux/slice/forumSlice';

const ChatBox = ({ receiverId }) => {
  const dispatch = useDispatch();
  const socket = useRef();
  const currentUser = useSelector((state) => state.authentication.currentUser);
  console.log(currentUser);
  const contents = useSelector((state) => state.forum.content);
  const [form] = Form.useForm();
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
    form.setFieldValue('mess', '');
  };

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [contents]);

  return (
    <div className="w-full md:w-auto flex flex-1 flex-col border rounded-3xl border-black mb-4 md:-mt-16 mx-4 md:mx-0 md:mr-4">
      <div className="flex p-4">
        <Avatar icon={<UserOutlined />} />
        <h1 className="ml-2 self-center">Name</h1>
      </div>
      <Divider className="my-0 bg-black" />
      <div className="h-[60vh] md:h-[80vh] overflow-y-scroll p-2">
        {contents &&
          contents.length > 0 &&
          contents.map((content, index) => {
            const isOwn = content?.senderId === currentUser?.id;
            return (
              <div ref={scrollRef} className="" key={index}>
                <TextMessage text={content.content} isOwn={isOwn} />
              </div>
            );
          })}
      </div>
      <Divider className="bg-black my-0" />

      <Form form={form} onFinish={handleSendMessage} className="flex p-4">
        <Form.Item name="mess" className="flex-1 mr-2 mb-0">
          <TextArea autoSize className="border border-black w-full rounded-2xl" />
        </Form.Item>

        <Form.Item className="mb-0">
          <Button
            type="primary"
            htmlType="submit"
            icon={<SendOutlined className="align-[0.125rem]" />}
            className="bg-black rounded-2xl"
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChatBox;
