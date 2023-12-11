import { Avatar, Button, Divider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SendOutlined, UserOutlined, SmileOutlined } from '@ant-design/icons';
import TextMessage from './TextMessage';
import TextArea from 'antd/es/input/TextArea';
import { io } from 'socket.io-client';
import EmojiPicker from 'emoji-picker-react';

import { addArrivalMessage, getConservationAction, sendMessageAction } from '../../../../redux/slice/forumSlice';
import { HOST } from '../../../../constants';

const ChatBox = ({ receiverId }) => {
  const socket = useRef();
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const conversationId = useSelector((state) => state.forum.conversationId);
  const dispatch = useDispatch();
  console.log(currentUser);
  const contents = useSelector((state) => state.forum.content);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const scrollRef = useRef();
  const [msg, setMsg] = useState('');

  useEffect(() => {
    socket.current = io(HOST.LOCAL);

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

  const handleSendMessage = () => {
    console.log(currentUser?.id);
    socket.current.emit('send-msg', {
      to: receiverId,
      from: currentUser?.id,
      msg: msg,
    });

    dispatch(
      sendMessageAction({
        receiverId: receiverId,
        conversationId: conversationId,
        content: msg,
      })
    );
    setMsg('');
    setIsEmojiPickerVisible(false);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [contents]);

  const handleEmojiClick = (event) => {
    let message = msg;
    message += event?.emoji;
    setMsg(message);
  };

  return (
    <div className="w-full md:w-auto flex flex-1 flex-col border rounded-3xl border-black mb-4 md:-mt-16 mx-4 md:mx-0 md:mr-4">
      <div className="flex p-4">
        <Avatar icon={<UserOutlined />} />
        <h1 className="ml-2 self-center">Name</h1>
      </div>
      <Divider className="mt-0 mb-1 bg-black" />
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

      {isEmojiPickerVisible && (
        <div className="absolute top-60 right-14 z-50 mt-12">
          <EmojiPicker lazyLoadEmojis={true} onEmojiClick={handleEmojiClick} />
        </div>
      )}

      <div className="flex p-4">
        <TextArea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          autoSize
          className="border border-black w-full rounded-2xl"
        />
        <SmileOutlined
          className="text-2xl mx-2 leading-7 cursor-pointer"
          onClick={() => {
            setIsEmojiPickerVisible((prev) => !prev);
          }}
        />
        <Button
          onClick={handleSendMessage}
          icon={<SendOutlined className="align-[0.125rem]" />}
          className="bg-black rounded-2xl text-white"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
