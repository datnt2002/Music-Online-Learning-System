import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Avatar, Button, Card } from 'antd';
import {
  AntDesignOutlined,
  InstagramOutlined,
  EditOutlined,
  EnvironmentOutlined,
  ContactsOutlined,
  FacebookFilled,
} from '@ant-design/icons';

import DefaultAvatar from '../../../assets/imgs/defaultAvatar.webp';

const LeftContainer = () => {
  const userProfile = useSelector((state) => state.authentication.currentUser);

  return (
    <div className="flex flex-col items-center">
      {/* avatar */}
      <div className="text-center">
        <Avatar
          size={110}
          icon={<AntDesignOutlined />}
          src={userProfile.avatar ? userProfile.avatar : DefaultAvatar}
          className="mb-2"
        />

        <h1 className="text-2xl font-semibold">{userProfile.firstName + ' ' + userProfile.lastName}</h1>
        <p className="italic">{userProfile.bio}</p>
        <p className="my-3">
          <EnvironmentOutlined className="align-[0.125rem]" /> Ha Noi, Viet Nam
        </p>

        <Link to="/user/profile/edit-profile">
          <Button
            type="primary"
            className="rounded-full bg-amber-400 w-full text-white font-bold text-base py-2 h-fit my-4"
            icon={<EditOutlined className="align-[0.125rem]" />}
          >
            Edit your profile
          </Button>
        </Link>

        <Link to="/lecturer/my-course-management">
          <Button
            type="primary"
            className="rounded-full bg-amber-400 w-full text-white font-bold text-base py-2 h-fit my-4`"
            icon={<ContactsOutlined className="align-[0.125rem]" />}
          >
            Teach on aleualeu
          </Button>
        </Link>
      </div>

      <Card size="small" title={`About ${userProfile.firstName}`} className="w-full my-4">
        <p>{userProfile.email}</p>
        <p>{userProfile.phoneNumber}</p>
      </Card>

      {/* table statistic */}
      <table className="w-full">
        <tr>
          <td>Project Views</td>
          <td className="text-right">173</td>
        </tr>
        <tr>
          <td>Appreciations</td>
          <td className="text-right">173</td>
        </tr>
        <tr>
          <td>Followers</td>
          <td className="text-right">173</td>
        </tr>
        <tr>
          <td>Following</td>
          <td className="text-right">173</td>
        </tr>
      </table>

      {/* Social network */}
      <div className="w-full my-4">
        <h1 className="font-semibold text-lg">On the web</h1>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full bg-amber-400 text-white font-bold text-base py-2 h-fit my-4"
            icon={<FacebookFilled className="align-[0.125rem]" />}
          >
            Facebook
          </Button>
        </Link>

        <Link>
          <Button
            type="primary"
            className="rounded-full w-full bg-amber-400 text-white font-bold text-base py-2 h-fit"
            icon={<InstagramOutlined className="align-[0.125rem]" />}
          >
            Instagram
          </Button>
        </Link>
      </div>

      {/* About me */}
      <div className="max-w-[350px]">
        <h1 className="font-semibold text-lg">About me</h1>
        <p>{userProfile.bio}</p>
      </div>

      <p className="my-3 font-medium">MEMBER SINCE: {userProfile.createdAt}</p>
    </div>
  );
};

export default LeftContainer;
