import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Divider } from 'antd';
import { ClockCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import {
  getDetailCourseAction,
  getListCourseAction,
  getListMyBoughtCourseAction,
} from '../../../redux/slice/courseSlice';
import BreadcrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import CourseDetailFloatingPanel from '../../../components/Container/CourseContainer/CourseDetailFloatingPanel';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import LecturerCard from '../../../components/Container/CardTemplate/LecturerCard';
import Footer from '../../../components/Common/Footer';
import WhatLearnDetail from '../../../components/Container/CourseContainer/WhatLearnDetail';
import CourseContent from '../../../components/Container/CourseContainer/CourseContent';
import RequirementContainer from '../../../components/Container/CourseContainer/RequirementContainer';
import { DAY_FORMAT, PAGINATION, PUBLIC_ROUTE } from '../../../constants';
import splitSlash from '../../../utils/splitSlash';

const CourseDetail = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);
  const [isBought, setIsBought] = useState(false);
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const boughtCourse = useSelector((state) => state.course.listMyBoughtCourse);
  console.log(boughtCourse);

  useEffect(() => {
    const isBought2 = boughtCourse.some((course) => course?.Course.courseId === pathNameArray[1]);
    console.log(isBought2);
    setIsBought(isBought2);
  }, [boughtCourse]);

  console.log(isBought);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDetailCourseAction({
        courseId: pathNameArray[1],
      })
    );

    dispatch(
      getListCourseAction({
        pageSize: PAGINATION.PAGE_SIZE,
        pageIndex: 1,
      })
    );

    dispatch(getListMyBoughtCourseAction({}));
  }, []);

  return (
    <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
      <Divider className="bg-black mt-8" />
      <div className=" text-black pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="ml-16 mb-4">
            <BreadcrumbCustom />
          </div>

          <div className="ml-16 max-w-2xl">
            <h1 className="text-3xl my-2 font-bohemian">{currentCourse?.course?.courseName}</h1>
            <h2 className="text-xl my-2">{currentCourse?.course?.brief}</h2>
            <div className="flex my-2 flex-wrap">
              <p className="align-middle leading-1">
                <NotificationOutlined className="align-[0.125rem]" /> {currentCourse?.course?.boughtCount} Subscribes
              </p>
            </div>
            <p className="my-2">
              Created by
              <Link to={PUBLIC_ROUTE.PUBLIC_PROFILE + `/${currentCourse?.course?.user?.id}`} className="underline ml-1">
                {currentCourse?.course?.user?.firstName + ' ' + currentCourse?.course?.user?.lastName}
              </Link>
            </p>

            <p className="mr-2">
              <ClockCircleOutlined className="align-[0.125rem]" /> <span className="mr-1">Last update at</span>
              {dayjs(currentCourse?.course?.updatedAt).format(DAY_FORMAT.D_M_Y)}
            </p>
          </div>
        </div>
        <Divider className="bg-black mt-10 mb-0" />
      </div>

      <CourseDetailFloatingPanel isBought={isBought} />

      {/* What you learn */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto w-5/6 lg:ml-16 lg:max-w-2xl">
          <WhatLearnDetail />

          <CourseContent />

          <RequirementContainer />

          {/* description */}
          <div className="my-6">
            <h2 className="text-xl mb-4 font-medium">Description</h2>
            <p>{currentCourse?.course?.description}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl mb-2 font-medium">Instructor</h2>
            <LecturerCard authorData={currentCourse?.course?.user} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
