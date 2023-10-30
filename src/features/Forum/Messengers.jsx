import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChatBox from '../../components/Container/ForumContainer/Messenger/ChatBox';
import SideBarChat from '../../components/Container/ForumContainer/Messenger/SideBarChat';
import WelcomeChat from '../../components/Container/ForumContainer/Messenger/WelcomeChat';

const Messengers = () => {
  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });
  console.log(pathNameArray);
  return (
    <div className="flex">
      <div className="flex basis-1/4">
        <SideBarChat />
      </div>
      <div className="flex flex-1">
        {' '}
        {pathNameArray.length === 2 ? <WelcomeChat /> : <ChatBox receiverId={pathNameArray[2]} />}
      </div>
    </div>
  );
};

export default Messengers;
