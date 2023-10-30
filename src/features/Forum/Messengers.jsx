import React from 'react';
import ChatBox from '../../components/Container/ForumContainer/Messenger/ChatBox';
import SideBarChat from '../../components/Container/ForumContainer/Messenger/SideBarChat';

const Messengers = () => {
  return (
    <div className="flex">
      <div className="flex basis-1/4">
        <SideBarChat />
      </div>
      <div className="flex flex-1">
        <ChatBox />
      </div>
      <div className="flex basis-1/4">
        <h1>gau</h1>
      </div>
    </div>
  );
};

export default Messengers;
