import React from 'react';

const CardCart = ({ item }) => {
  console.log(item);
  return (
    <div className="rounded-lg mb-2" key={item?.cartItemId}>
      <div className="flex rounded-lg p-6 shadow-xl">
        <img src={item?.Course?.courseImg} alt="courseImage" className="rounded-lg max-w-[10rem]" />
        <div className="flex flex-1 ml-5">
          <div className="flex flex-col flex-1">
            <h1 className="text-lg font-bold text-gray-900 font-bohemian">{item?.Course?.courseName}</h1>
            <p className="text-sm">{item?.Course?.price} Ecoin</p>
          </div>

          <p className="text-sm cursor-pointer">X</p>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
