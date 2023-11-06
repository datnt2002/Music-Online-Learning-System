import React from 'react';
import bgImg from '../../assets/imgs/backdropprofile.jpg';
import { Button, Divider } from 'antd';
import { UserAddOutlined, EnvironmentOutlined } from '@ant-design/icons';

const PublicProfile = () => {
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
                src="data:image/jpeg;base64,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"
                class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 lg:-ml-16 "
              />
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 text-center lg:self-center">
              <div class="py-6 px-3 sm:mt-0 md:-mt-16">
                <Button className="bg-black text-white font-bold hover:shadow-md shadow rounded-xl">
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
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">Jenna Stones</h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <EnvironmentOutlined className="align-[0.125rem]" /> Los Angeles, California
            </div>
          </div>
          <Divider className="bg-black mb-0" />
          <div class="py-10 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
                  structure. An artist of considerable range.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
