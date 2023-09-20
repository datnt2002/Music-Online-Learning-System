import { Avatar } from 'antd';
import React from 'react';
import dayjs from 'dayjs';

const ModalDisableAccount = ({ data }) => {
  console.log(data);
  return (
    <div key={data.id}>
      <p className="text-center py-10 font-medium">Are you sure to delete account ${data.id}</p>
      <div className="flex">
        <div className="flex flex-1 items-center justify-center">
          <Avatar className="" size={64} />
        </div>
        <div className="flex flex-1 flex-col">
          <p>
            Full Name: {data.firstName} {data.lastName}
          </p>
          <p>Role: User</p>
          <p>Member since: {dayjs(data.createdAt).format('DD/MM/YYYY')}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDisableAccount;
