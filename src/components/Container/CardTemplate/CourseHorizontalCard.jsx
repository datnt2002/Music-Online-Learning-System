import React from 'react';

const CourseHorizontalCard = ({ courseData }) => {
  return (
    <div className="flex p-6 border rounded-2xl shadow-xl ml-4">
      <div className="mr-6 flex basis-1/3">
        <img src={courseData.courseImg} className="aspect-video  shadow-md " alt="" />
      </div>

      <div className="flex flex-col flex-1">
        <h1 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {courseData.courseName}
        </h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
      </div>
    </div>
  );
};

export default CourseHorizontalCard;
