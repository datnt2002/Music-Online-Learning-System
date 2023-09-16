import React from 'react';

const CourseInfoCard = ({ currentCourse }) => {
  return (
    <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
        <img src="https://thanhxuanpet.com/wp-content/uploads/2022/04/tac-hai-cua-meo-beo-phi.jpg" alt="" />
      </div>
      <div class="p-6">
        <h1 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {currentCourse.courseName}
        </h1>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </p>
      </div>
    </div>
  );
};

export default CourseInfoCard;
