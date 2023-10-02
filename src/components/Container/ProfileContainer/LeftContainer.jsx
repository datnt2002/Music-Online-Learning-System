import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import dayjs from 'dayjs';

import { DAY_FORMAT, LECTURER_ROUTE, ROLE, USER_ROUTE } from '../../../constants';
import defaultAvatar from '../../../assets/imgs/defaultAvatar.webp';

const LeftContainer = () => {
  const userProfile = useSelector((state) => state.authentication.currentUser);
  const navigate = useNavigate();

  const handleNavigateLecturer = () => {
    console.log(userProfile);
    if (userProfile.roles[0].roleName === ROLE.LECTURER) {
      navigate(LECTURER_ROUTE.DASHBOARD);
    } else {
      navigate(USER_ROUTE.LECTURER_REQUEST_FORM);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* avatar */}
      <div className="text-center">
        <Avatar size={110} icon={<AntDesignOutlined />} src={userProfile.avatar || defaultAvatar} className="mb-2" />

        <h1 className="text-2xl font-semibold">{userProfile.firstName + ' ' + userProfile.lastName}</h1>
        <p className="italic">{userProfile.bio}</p>
        <p className="my-3">
          <EnvironmentOutlined className="align-[0.125rem]" /> Ha Noi, Viet Nam
        </p>

        <Link to={USER_ROUTE.USER_EDIT_PROFILE}>
          <Button
            type="primary"
            className="rounded-full bg-amber-400 w-full text-white font-bold text-base py-2 h-fit my-4"
            icon={<EditOutlined className="align-[0.125rem]" />}
          >
            Edit your profile
          </Button>
        </Link>

        <Button
          onClick={handleNavigateLecturer}
          type="primary"
          className="rounded-full bg-amber-400 w-full text-white font-bold text-base py-2 h-fit my-4`"
          icon={<ContactsOutlined className="align-[0.125rem]" />}
        >
          Teach on Music Space
        </Button>
      </div>

      <Card size="small" title={`About ${userProfile.firstName}`} className="w-full my-4">
        <p>{userProfile.email}</p>
        <p>{userProfile.phoneNumber}</p>
      </Card>

      {/* table statistic */}
      <table className="w-full">
        <tbody>
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
        </tbody>
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

      <p className="my-3 font-medium">MEMBER SINCE: {dayjs(userProfile.createdAt).format(DAY_FORMAT.D_M_Y)}</p>
    </div>
  );
};

export default LeftContainer;
