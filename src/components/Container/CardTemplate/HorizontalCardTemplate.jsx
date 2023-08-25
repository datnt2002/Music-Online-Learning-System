import React from 'react';

const HorizontalCardTemplate = () => {
  return (
    <div className="flex p-6 border">
      <div className="mr-6 max-w-[48rem] flex flex-1">
        <img
          src="https://thichthucung.com/wp-content/uploads/meo-beo-phi-co-nguy-hiem-khong.jpg"
          className="aspect-video"
          alt=""
        />
      </div>

      <div className="flex flex-col flex-1">
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
      </div>
    </div>
  );
};

export default HorizontalCardTemplate;
