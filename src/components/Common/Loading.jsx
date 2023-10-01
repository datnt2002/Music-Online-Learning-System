import React from 'react';
import loadingImg from '../../assets/imgs/loading.svg';

const Loading = () => {
  return (
    <div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center bg-transparent backdrop-blur-lg w-screen h-screen">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img
        src={loadingImg}
        className="rounded-full h-28 w-28"
        alt=""
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = '';
        }}
      />
    </div>
  );
};

export default Loading;
