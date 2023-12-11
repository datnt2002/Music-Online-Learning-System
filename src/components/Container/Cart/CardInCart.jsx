import React from 'react';

const CardInCart = ({ data }) => {
  console.log(data);
  return (
    <div className="flex max-w-[18rem]">
      <div className="flex basis-1/3 mr-2">
        <img src="https://cdn.fs.teachablecdn.com/BAoX2vvYSaKKyC4sijfS" alt="CourseImage" />
      </div>
      <div className="flex flex-col flex-1">
        <h1>Course for beginner</h1>
        <p>Author</p>
        <p>140</p>
      </div>
    </div>
  );
};

export default CardInCart;
