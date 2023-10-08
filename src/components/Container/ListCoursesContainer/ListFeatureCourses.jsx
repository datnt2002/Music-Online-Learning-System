import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import dayjs from 'dayjs';
import { Rate } from 'antd';

import { getListCourseAction } from '../../../redux/slice/courseSlice';
import defaultCourse from '../../../assets/imgs/default-course.png';
import { DAY_FORMAT } from '../../../constants';

const ListFeatureCourses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getListCourseAction({
        pageIndex: 1,
        pageSize: 20,
      })
    );
  }, [dispatch]);

  const listCourse = useSelector((state) => state.course.listCourse);

  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {listCourse.map((course) => {
        return (
          <div className="!flex p-6" key={course.courseId}>
            <div className="mr-6 flex flex-1">
              <img
                src={course.courseImg || defaultCourse}
                className="aspect-video object-cover h-full w-full"
                alt="course avatar"
              />
            </div>

            <div className="flex flex-col flex-1 justify-between ml-8">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bohemian font-semibold leading-snug text-blue-gray-900 antialiased">
                  {course.courseName}
                </h1>
                <h1>
                  Acoustic Guitar Theory, Fingerpicking, Fretting, Chords: Most Important 25 Videos For Getting Started
                  w/ Playing Guitar
                </h1>
                <h1 className="underline font-sans text-base font-light leading-relaxed">Author</h1>
                <div className="flex">
                  <h1 className="mr-4 font-sans text-sm font-light leading-relaxed">
                    Updated {dayjs(course.updatedAt).format(DAY_FORMAT.D_M_Y)}
                  </h1>
                  <h1 className='font-sans text-sm font-light leading-relaxed"'>
                    7 hours total . 45 lecturers . All levels
                  </h1>
                </div>

                <div className="flex">
                  <p className="font-sans text-sm font-light leading-relaxed">4.5</p>
                  <Rate disabled allowHalf defaultValue={2.5} className="leading-none mx-2" />
                </div>
              </div>
              <h1 className="text-xl font-semibold leading-snug text-blue-gray-900 antialiased">${course.price}</h1>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ListFeatureCourses;
