import React from 'react';
import dayjs from 'dayjs';

import { DAY_FORMAT, STORAGE } from '../../../constants';
import defaultCourse from '../../../assets/imgs/default-course.png';

const CourseInfoCard = () => {
  const currentCourse = JSON.parse(sessionStorage.getItem(STORAGE.COURSE));

  return (
    <div className="relative flex w-80 flex-col border border-black rounded-xl bg-white/80 bg-clip-border text-gray-700 shadow-xl">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden border border-black ">
        <img src={currentCourse.courseImg || defaultCourse} alt="" />
      </div>
      <div className="p-6">
        <h1 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {currentCourse.courseName}
        </h1>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Price: ${currentCourse.price}
        </p>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Create At: {dayjs(currentCourse.createdAt).format(DAY_FORMAT.D_M_Y)}
        </p>
      </div>
    </div>
  );
};

export default CourseInfoCard;
