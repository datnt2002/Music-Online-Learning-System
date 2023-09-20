import React from 'react';

import LeftContainer from '../../components/Container/ProfileContainer/LeftContainer';
import RightContainer from '../../components/Container/ProfileContainer/RightContainer';
import backDrop from '../../assets/imgs/backdropprofile.jpg';
const Profile = () => {
  return (
    <div className="relative bg-[#f9f9f9]">
      {/* big image */}
      <div className="absolute top-0 right-0 left-0 h-48">
        <img src={backDrop} alt="backImage" className="object-cover h-full w-full" />
      </div>

      <div className="flex relative pt-16 px-12 pb-12 ">
        <div className="flex-1/3 items-start rounded-xl pt-6 px-8 pb-4 bg-white shadow-2xl">
          <LeftContainer />
        </div>

        {/* right container */}
        <div className="flex-1 mt-36 ml-12 mb-12">
          <RightContainer />
        </div>
      </div>
      {/* left container */}
    </div>
  );
};

export default Profile;
