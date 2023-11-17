import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Divider, Menu } from 'antd';
import { PlaySquareOutlined, QuestionOutlined } from '@ant-design/icons';

import { getDetailCourseAction, getDetailLessonAction } from '../../../redux/slice/courseSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { STORAGE, USER_ROUTE } from '../../../constants';
import splitSlash from '../../../utils/splitSlash';

const LessonDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

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
    const combineLessons = [...section?.Lessons, ...section?.Quizzes];
    const sortedItems = combineLessons.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    return {
      key: section?.sectionId,
      label: section?.sectionName,
      children: sortedItems.map((lesson) => {
        return lesson?.lessonId
          ? {
              key: lesson?.lessonId,
              label: lesson?.lessonName,
              icon: <PlaySquareOutlined />,
            }
          : {
              key: lesson?.quizId,
              label: lesson?.title,
              icon: <QuestionOutlined />,
            };
      }),
    };
  });

  const onClick = (e) => {
    dispatch(
      getDetailLessonAction({
        lessonId: e.key,
      })
    );
    navigate(`${USER_ROUTE.LESSON_DETAIL}/${e.key}`);
  };

  return (
    <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }} className="min-h-screen">
      <Divider className="bg-black my-0" />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 flex flex-col h-[30rem] md:mt-10 mx-6">
          <ReactPlayer url={currentLesson.videoPath} playing={true} controls={true} height="100%" width="100%" />
          <h1 className="text-3xl md:text-4xl mt-4 font-bohemian tracking-wide">{currentLesson.lessonName}</h1>
        </div>
        <Divider type="vertical" className="hidden md:block bg-black min-h-screen md:my-0 md:mx-0" />
        <Divider type="horizontal" className="block md:hidden bg-black md:my-0" />
        <div className="md:w-1/2  flex flex-col flex-1 mb-10">
          <h1 className="my-6 font-bohemian font-bold text-3xl mx-6">Learning path</h1>
          <Menu
            selectedKeys={pathNameArray[2]}
            className="bg-white/10 border rounded-2xl"
            onClick={onClick}
            mode="inline"
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
