import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Divider, Menu } from 'antd';
import { PlaySquareOutlined, QuestionOutlined } from '@ant-design/icons';

import { getDetailCourseAction } from '../../../redux/slice/courseSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import { LESSON_TYPE, STORAGE, USER_ROUTE } from '../../../constants';
import ChooseLesson from '../../../components/Container/LessonContainer/ChooseLesson';
import VideoLesson from '../../../components/Container/LessonContainer/VideoLesson';
import QuizLesson from '../../../components/Container/LessonContainer/QuizLesson';

const LessonDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sections = useSelector((state) => state.course.listSections);
  const [lessonType, setLessonType] = useState();

  useEffect(() => {
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
              key: lesson?.lessonId + LESSON_TYPE.LESSON,
              label: lesson?.lessonName,
              icon: <PlaySquareOutlined />,
            }
          : {
              key: lesson?.quizId + LESSON_TYPE.QUIZ,
              label: lesson?.title,
              icon: <QuestionOutlined />,
            };
      }),
    };
  });

  const onClick = (e) => {
    const type = e.key.split('_');
    if (type.length > 1) {
      if (type[1] === 'Lesson') {
        setLessonType('Lesson');
      } else {
        setLessonType('Quiz');
      }
    }
    navigate(USER_ROUTE.LESSON_DETAIL + `/${type[0]}`);
  };

  return (
    <div style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }} className="min-h-screen">
      <Divider className="bg-black my-0" />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 flex flex-col h-[30rem] md:mt-10 mx-6">
          {!lessonType ? <ChooseLesson /> : lessonType === 'Lesson' ? <VideoLesson /> : <QuizLesson />}
        </div>
        <Divider type="vertical" className="hidden md:block bg-black min-h-screen md:my-0 md:mx-0" />
        <Divider type="horizontal" className="block md:hidden bg-black md:my-0" />
        <div className="md:w-1/2  flex flex-col flex-1 mb-10">
          <h1 className="my-6 font-bohemian font-bold text-3xl mx-6">Learning path</h1>
          <Menu className="bg-white/10 border rounded-2xl" onClick={onClick} mode="inline" items={items} />
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
