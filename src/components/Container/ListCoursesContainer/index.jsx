import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Carousel } from 'antd';
import { LeftOutlined, RightOutlined, BookOutlined } from '@ant-design/icons';

import { getListCourseAction } from '../../../redux/slice/courseSlice';
import { PUBLIC_ROUTE, STORAGE } from '../../../constants';
import defaultCourse from '../../../assets/imgs/default-course.png';
import formatPrice from '../../../utils/formatPrice';

const ListContainer = () => {
  const listCourse = useSelector((state) => state.course.listCourse);
  console.log(listCourse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();

  //dispatch action get 20 courses for list courses started
  useEffect(() => {
    dispatch(
      getListCourseAction({
        pageIndex: 1,
        pageSize: 20,
      })
    );
  }, [dispatch]);

  //go to detail course
  const handleViewDetailCourse = (courseId) => {
    navigate(`${PUBLIC_ROUTE.COURSE_DETAIL}/${courseId}`);
    localStorage.setItem(STORAGE.COURSE_ID, courseId);
  };

  // Number of slides to show for different screen sizes
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    //responsive carousel
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      switch (true) {
        case screenWidth < 640:
          setSlidesToShow(1);
          break;
        case screenWidth >= 640 && screenWidth < 768:
          setSlidesToShow(2);
          break;
        case screenWidth >= 768 && screenWidth <= 1024:
          setSlidesToShow(3);
          break;
        case screenWidth > 1300:
          setSlidesToShow(5);
          break;
        default:
          setSlidesToShow(4);
          break;
      }
    };
    // Set initial state
    handleResize();
    // Attach the event listener
    window.addEventListener('resize', handleResize);
    // Detach the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <Button
        className="border border-black rounded-full mb-3"
        icon={<LeftOutlined className="align-[0.125rem]" />}
        onClick={() => {
          ref.current.prev();
        }}
      />
      <Carousel ref={ref} rows={1} slidesPerRow={slidesToShow} dots={false} draggable infinite={true}>
        {listCourse.map((course) => {
          return (
            <div key={course?.courseId} className="my-3">
              <div
                onClick={() => handleViewDetailCourse(course?.courseId)}
                className="relative flex w-[14rem] h-80 flex-col border border-black rounded-lg hover:scale-105"
              >
                <div className="relative m-4 h-40 overflow-hidden">
                  <img src={course?.courseImg || defaultCourse} alt="error" className="object-cover h-full w-full" />
                </div>
                <div className="px-6 pb-6 pt-3">
                  <h1 className="truncate text-lg font-bohemian font-semibold leading-snug text-blue-gray-900 antialiased">
                    {course?.courseName}
                  </h1>
                  <h1 className="truncate text-sm my-1 leading-snug text-blue-gray-900 antialiased">{course?.brief}</h1>
                  <p className="font-sans text-base leading-relaxed truncate">
                    <BookOutlined className="align-[0.125rem]" /> {course?.sectionCount} sections
                  </p>
                  <p className="font-sans text-lg font-medium leading-relaxed truncate mt-4">
                    ${formatPrice(course?.price)}
                  </p>
                </div>
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

export default ListContainer;
