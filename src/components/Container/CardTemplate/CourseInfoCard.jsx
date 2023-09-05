import React from 'react';

const CourseInfoCard = () => {
  return (
    <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
      <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Tailwind card
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </p>
      </div>
    </div>
  );
};

export default CourseInfoCard;
