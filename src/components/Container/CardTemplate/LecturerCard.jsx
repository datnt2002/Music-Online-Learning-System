import { Avatar } from 'antd';
import React from 'react';

const LecturerCard = () => {
  return (
    <div className="flex flex-1 border">
      <div className="flex basis-1/4">
        <Avatar
          size={68}
          alt="avatar author"
          shape="circle"
          className="my-auto mx-auto"
          src="https://thichthucung.com/wp-content/uploads/meo-beo-phi-co-nguy-hiem-khong.jpg"
        ></Avatar>
      </div>
      <div className="flex flex-1 flex-col">
        <h1>Jason Allen</h1>
        <h1>Jason Allen</h1>
        <h1>Jason Allen</h1>
        <h1>Jason Allen</h1>
        <h1>Jason Allen</h1>
      </div>
    </div>
  );
};

export default LecturerCard;
