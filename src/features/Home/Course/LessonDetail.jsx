import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getDetailLessonAction } from '../../../redux/slice/courseSlice';

const LessonDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = pathname.split('/').filter((item) => {
    return item;
  });

  const currentLesson = useSelector((state) => state.course.currentLesson);

  useEffect(() => {
    dispatch(
      getDetailLessonAction({
        lessonId: pathNameArray[2],
      })
    );
  }, []);

  return (
    <div>
      <ReactPlayer url={currentLesson.videoPath} playing={true} controls={true} />
      <h1>{currentLesson.lessonName}</h1>
    </div>
  );
};

export default LessonDetail;
