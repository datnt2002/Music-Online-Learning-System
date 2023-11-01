import React from 'react';
import defaultCourse from '../../../assets/imgs/default-course.png';
import dayjs from 'dayjs';
import { DAY_FORMAT, PUBLIC_ROUTE, STORAGE } from '../../../constants';
import { Rate } from 'antd';
import formatPrice from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

const CourseHorizontalCard = ({ courseData }) => {
  const navigate = useNavigate();
  const handleViewDetail = () => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseData.courseId}`);
    localStorage.setItem(STORAGE.COURSE_ID, courseData.courseId);
  };

  return (
    <div className="flex p-6 border border-black rounded-2xl ml-4 cursor-pointer" onClick={handleViewDetail}>
      <div className="mr-6 flex basis-1/3">
        <img src={courseData?.courseImg || defaultCourse} className="aspect-video" alt="" />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col ">
          <h1 className="mb-2 font-bohemian block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {courseData.courseName}
          </h1>
          <h1 className="underline font-sans text-base font-light leading-relaxed">Author</h1>
          <div className="flex">
            <h1 className="mr-4 font-sans text-sm font-light leading-relaxed">
              Updated {dayjs(courseData.updatedAt).format(DAY_FORMAT.D_M_Y)}
            </h1>
            <h1 className='font-sans text-sm font-light leading-relaxed"'>7 hours total . 45 lecturers . All levels</h1>
          </div>

          <div className="flex">
            <p className="font-sans text-sm font-light leading-relaxed">4.5</p>
            <Rate disabled allowHalf defaultValue={2.5} className="leading-none mx-2" />
          </div>
        </div>
        <h1 className="text-base font-semibold leading-snug text-blue-gray-900 antialiased">
          ${courseData.price && formatPrice(courseData.price)}
        </h1>
      </div>
    </div>
  );
};

export default CourseHorizontalCard;
