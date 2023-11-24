import React from 'react';
import chooseLesson from '../../../assets/imgs/chooseLesson.png';

const ChooseLesson = () => {
  return (
    <>
      <h1 className="mx-auto font-bohemian text-3xl mt-6">Choose the lesson</h1>
      <img src={chooseLesson} alt="" />
    </>
  );
};

export default ChooseLesson;
