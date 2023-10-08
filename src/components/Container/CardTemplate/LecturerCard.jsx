import React from 'react';
import { Avatar } from 'antd';
import { HeartFilled, PlayCircleFilled, LikeFilled } from '@ant-design/icons';

import defaultAvatar from '../../../assets/imgs/defaultAvatar.webp';

const LecturerCard = () => {
  return (
    <div className="flex flex-1 rounded-2xl mr-4 border border-black ">
      <div className="flex basis-1/4 pl-6">
        <Avatar size={68} alt="avatar author" shape="circle" className="my-auto mx-auto" src={defaultAvatar} />
      </div>
      <div className="flex flex-1 flex-col py-4">
        <h1 className="px-4 ">Author Name</h1>
        <h1 className="pr-4 truncate">
          <HeartFilled className="align-[0.125rem] px-4" />
          25,754 Reviews
        </h1>
        <h1 className="pr-4 truncate">
          <LikeFilled className="align-[0.125rem] px-4" />
          763,787 Students
        </h1>
        <h1 className="pr-4 truncate">
          <PlayCircleFilled className="align-[0.125rem] px-4" />8 Courses
        </h1>
      </div>
    </div>
  );
};

export default LecturerCard;
