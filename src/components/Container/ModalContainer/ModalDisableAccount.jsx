import { Avatar } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import defaultAvatar from '../../../assets/imgs/defaultAvatar.webp';
import { useSelector } from 'react-redux';
import { DAY_FORMAT } from '../../../constants';

const ModalDisableAccount = () => {
  const data = useSelector((state) => state.user.accountProfile);

  return (
    <div key={data?.id}>
      <p className="text-center py-10 font-medium">Are you sure to delete account ${data.id}</p>
      <div className="flex">
        <div className="flex flex-1 items-center justify-center">
          <Avatar className="" size={64} src={data.avatar || defaultAvatar} />
        </div>
        <div className="flex flex-1 flex-col">
          <p>
            Full Name: {data?.firstName} {data?.lastName}
          </p>
          <p>Username: {data?.username}</p>
          <p>Member since: {dayjs(data?.createdAt).format(DAY_FORMAT.D_M_Y)}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDisableAccount;
