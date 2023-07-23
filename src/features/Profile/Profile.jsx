import React from 'react';
import LeftContainer from '../../components/Container/ProfileContainer/LeftContainer';
import RightContainer from '../../components/Container/ProfileContainer/RightContainer';

const Profile = () => {
  return (
    <div className="relative">
      {/* big image */}
      <div className="absolute">
        <img
          src="https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2022-03/ocean_0.jpg?h=2f83cd36&itok=KIa1F6id"
          alt=""
          className="h-52 w-full object-center "
        />
      </div>

      <div className="flex relative pt-16 px-12 pb-12 ">
        <div className="flex-1/3 items-start bg-amber-400 rounded-xl pt-6 px-8 pb-4">
          <LeftContainer />
        </div>

        {/* right container */}
        <div className="flex-1">
          <RightContainer className="" />
        </div>
      </div>
      {/* left container */}
    </div>
  );
};

export default Profile;
