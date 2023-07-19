import React from 'react';
import LeftContainer from '../../components/Container/ProfileContainer/LeftContainer';
import RightContainer from '../../components/Container/ProfileContainer/RightContainer';

const Profile = () => {
  return (
    <>
      {/* big image */}
      <div className="">
        <img
          src="https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2022-03/ocean_0.jpg?h=2f83cd36&itok=KIa1F6id"
          alt=""
          className="h-52 w-full object-center "
        />
      </div>

      {/* left container */}
      <div className="">
        <LeftContainer />
      </div>
      {/* right container */}
      <div>
        <RightContainer />
      </div>
    </>
  );
};

export default Profile;
