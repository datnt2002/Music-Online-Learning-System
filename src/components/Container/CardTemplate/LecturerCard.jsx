import React from 'react';
import { Avatar } from 'antd';

import defaultAvatar from '../../../assets/imgs/defaultAvatar.webp';

const LecturerCard = ({ authorData }) => {
  return (
    <div className="flex flex-1 rounded-2xl mr-4 mb-6 ">
      <div className="flex basis-1/4">
        <Avatar
          size={68}
          alt="avatar author"
          shape="circle"
          className="my-auto mx-auto"
          src={authorData?.avatar || defaultAvatar}
        />
      </div>
      <div className="flex flex-1 flex-col py-4">
        <h1 className="px-4 ">{authorData?.firstName + ' ' + authorData?.lastName}</h1>
      </div>
    </div>
  );
};

export default LecturerCard;
