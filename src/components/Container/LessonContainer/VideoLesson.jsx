import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import splitSlash from '../../../utils/splitSlash';
import { getDetailLessonAction } from '../../../redux/slice/courseSlice';
import Loading from '../../Common/Loading';

const VideoLesson = () => {
  const currentLesson = useSelector((state) => state.course.currentLesson);
  const loading = useSelector((state) => state.course.loading);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  useEffect(() => {
    dispatch(
      getDetailLessonAction({
        lessonId: pathNameArray[2],
      })
    );
  }, [pathNameArray[2]]);

  return (
    <>
      {loading && <Loading />}
      <ReactPlayer url={currentLesson.videoPath} playing={true} controls={true} height="100%" width="100%" />
      <h1 className="text-3xl md:text-4xl mt-4 font-bohemian tracking-wide">{currentLesson.lessonName}</h1>
    </>
  );
};

export default VideoLesson;
