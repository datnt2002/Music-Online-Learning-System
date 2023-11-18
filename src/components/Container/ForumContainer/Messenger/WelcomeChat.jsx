import React from 'react';
import welcome from '../../../../assets/imgs/chooseLesson.png';

const WelcomeChat = () => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col">
      <h1 className="text-4xl text-center font-bold font-bohemian">Choose friend to chat</h1>
      <img src={welcome} alt="" />
    </div>
  );
};

export default WelcomeChat;
