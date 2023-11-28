import React from 'react';

const CardCart = () => {
  return (
    <div className="rounded-lg">
      <div className="flex rounded-lg p-6 shadow-xl">
        <img
          src="https://cdn.fs.teachablecdn.com/BAoX2vvYSaKKyC4sijfS"
          alt="courseImage"
          className="rounded-lg max-w-[10rem]"
        />
        <div className="flex flex-1 ml-5">
          <div className="flex flex-col flex-1">
            <h1 className="text-lg font-bold text-gray-900 font-bohemian">Guitar for beginner</h1>
            <p className="mt-1 text-xs text-gray-700">Author</p>
          </div>

          <p className="text-sm">259 Ecoin</p>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
