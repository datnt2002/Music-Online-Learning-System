import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Divider, Menu } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';

import { getDetailCourseAction, getDetailLessonAction } from '../../../redux/slice/courseSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { STORAGE, USER_ROUTE } from '../../../constants';

const LessonDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });

  const currentLesson = useSelector((state) => state.course.currentLesson);
  const sections = useSelector((state) => state.course.listSections);

  useEffect(() => {
    dispatch(
      getDetailLessonAction({
        lessonId: pathNameArray[2],
      })
    );
    dispatch(
      getDetailCourseAction({
        courseId: localStorage.getItem(STORAGE.COURSE_ID),
      })
    );
  }, []);

  const items = sections.map((section) => {
    return {
      key: section.sectionId,
      label: section.sectionName,
      children: section.Lessons.map((lesson) => {
        return {
          key: lesson.lessonId,
          label: lesson.lessonName,
          icon: <VideoCameraOutlined />,
        };
      }),
    };
  });

  const onClick = (e) => {
    console.log('click ', e.key);
    navigate(`${USER_ROUTE.LESSON_DETAIL}/${e.key}`);
  };

  return (
    <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }} className="h-screen">
      <Divider className="bg-black my-0" />
      <div className="flex">
        <div className="flex flex-col h-[30rem] mt-10 mx-6">
          <ReactPlayer url={currentLesson.videoPath} playing={true} controls={true} height="100%" width="100%" />
          <h1 className="text-3xl mt-11 font-bohemian tracking-wide">{currentLesson.lessonName}</h1>
        </div>
        <Divider type="vertical" className="bg-black h-screen mt-0" />
        <div className="mx-10 flex flex-1 mb-10">
          <Menu className="bg-white/90 rounded-2xl mt-6" onClick={onClick} mode="inline" items={items} />
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
