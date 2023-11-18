import React from 'react';
import { useLocation } from 'react-router-dom';
import { Divider } from 'antd';

import ChatBox from '../../components/Container/ForumContainer/Messenger/ChatBox';
import SideBarChat from '../../components/Container/ForumContainer/Messenger/SideBarChat';
import WelcomeChat from '../../components/Container/ForumContainer/Messenger/WelcomeChat';
import repeatBg from '../../assets/imgs/repeatbg.jpg';
import splitSlash from '../../utils/splitSlash';

const Messengers = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  return (
    <>
      <Divider className="bg-black mb-0" />
      <div
        className="flex flex-col md:flex-row min-h-screen"
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
      >
        <div className="order-2 md:order-1 flex basis-1/4">
          <SideBarChat />
        </div>
        <div className="order-1 md:order-2 flex flex-1 mt-4 md:mt-20">
          {pathNameArray.length === 2 ? <WelcomeChat /> : <ChatBox receiverId={pathNameArray[2]} />}
        </div>
      </div>
    </>
  );
};

export default Messengers;
