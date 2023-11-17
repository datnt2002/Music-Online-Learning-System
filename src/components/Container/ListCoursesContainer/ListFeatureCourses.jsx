import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import defaultCourse from '../../../assets/imgs/default-course.png';
import { DAY_FORMAT, PUBLIC_ROUTE, STORAGE } from '../../../constants';
import formatPrice from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

const ListFeatureCourses = () => {
  const listCourse = useSelector((state) => state.course.listCourse);
  const dispatch = useDispatch();
  const ref = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(
  //     getListCourseAction({
  //       pageIndex: 1,
  //       pageSize: 20,
  //     })
  //   );
  // }, [dispatch]);

  const handleViewDetail = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
    localStorage.setItem(STORAGE.COURSE_ID, courseId);
  };

  return (
    <div className="relative">
      <Button
        className="border border-black rounded-full mb-3 ml-6"
        icon={<LeftOutlined className="align-[0.125rem]" />}
        onClick={() => {
          ref.current.prev();
        }}
      />
      <Carousel ref={ref} rows={1} slidesPerRow={1} dots={false} draggable infinite={true}>
        {listCourse.map((course) => {
          return (
            <div
              className="flex flex-col lg:!flex lg:flex-row p-6 cursor-pointer"
              key={course?.courseId}
              onClick={() => {
                handleViewDetail(course.courseId);
              }}
            >
              <div className="mr-6 flex flex-1">
                <img
                  src={course?.courseImg || defaultCourse}
                  className="aspect-video object-cover h-full w-full"
                  alt="course avatar"
                />
              </div>

              <div className="flex flex-col flex-1 justify-between ml-8">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-bohemian font-semibold leading-snug text-blue-gray-900 antialiased">
                    {course?.courseName}
                  </h1>
                  <h1>
                    Acoustic Guitar Theory, Fingerpicking, Fretting, Chords: Most Important 25 Videos For Getting
                    Started w/ Playing Guitar
                  </h1>
                  <h1 className="underline font-sans text-base font-light leading-relaxed">Author</h1>
                  <div className="flex">
                    <h1 className="mr-4 font-sans text-sm font-light leading-relaxed">
                      Updated {dayjs(course.updatedAt).format(DAY_FORMAT.D_M_Y)}
                    </h1>
                    <h1 className='font-sans text-sm font-light leading-relaxed"'>45 lecturers</h1>
                  </div>
                </div>
                <h1 className="text-xl font-semibold leading-snug text-blue-gray-900 antialiased">
                  ${course.price && formatPrice(course.price)}
                </h1>
              </div>
            </div>
          );
        })}
      </Carousel>
      <Button
        className="absolute right-4 border border-black rounded-full mt-3"
        icon={<RightOutlined className="align-[0.125rem]" />}
        onClick={() => {
          ref.current.next();
        }}
      />
    </div>
  );
};

export default ListFeatureCourses;
