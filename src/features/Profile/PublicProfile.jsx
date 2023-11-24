import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Button, Divider } from 'antd';
import { UserAddOutlined, EnvironmentOutlined } from '@ant-design/icons';

import bgImg from '../../assets/imgs/backdropprofile.jpg';
import { getUserByIdAction } from '../../redux/slice/userSlice';
import defaultAvatar from '../../assets/imgs/defaultAvatar.webp';
import { addFriendAction } from '../../redux/slice/forumSlice';
import splitSlash from '../../utils/splitSlash';

const PublicProfile = () => {
  const accountProfile = useSelector((state) => state.user.accountProfile);

  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);
  console.log(accountProfile);

  useEffect(() => {
    dispatch(
      getUserByIdAction({
        userId: pathNameArray[1],
      })
    );
  }, []);

  const handleAddFriend = () => {
    dispatch(
      addFriendAction({
        friendId: pathNameArray[1],
      })
    );
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 left-0 h-48">
        <img src={bgImg} alt="backImage" className="object-cover h-full w-full" />
      </div>

      <div class="relative top-16 pb-12 flex-col mx-auto w-10/12 break-words mb-6 ">
        <div class="px-6 bg-white shadow-xl rounded-lg">
          <div class="flex flex-col lg:flex-row flex-wrap justify-center">
            <div class="w-full h-40 lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <img
                alt="..."
                src={accountProfile?.avatar || defaultAvatar}
                class="shadow-xl rounded-full h-48 align-middle border-none absolute -m-16 lg:-ml-16 "
              />
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 text-center lg:self-center">
              <div class="py-6 px-3 sm:mt-0 md:-mt-16">
                <Button
                  className="bg-black text-white font-bold hover:shadow-md shadow rounded-xl"
                  onClick={handleAddFriend}
                >
                  <UserAddOutlined /> Add Friend
                </Button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span>
                  <span class="text-sm text-blueGray-400">Courses</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span>
                  <span class="text-sm text-blueGray-400">Subcribes</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span>
                  <span class="text-sm text-blueGray-400">Friends</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
              {accountProfile?.firstName + ' ' + accountProfile?.lastName}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <EnvironmentOutlined className="align-[0.125rem]" /> {accountProfile?.nation}
            </div>
          </div>
          <Divider className="bg-black mb-0" />
          <div class="py-10 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">{accountProfile?.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
