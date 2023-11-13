import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Radio } from 'antd';
import { Content } from 'antd/es/layout/layout';

import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { getDetailDraftCourseAction } from '../../../redux/slice/courseSlice';
import { STORAGE } from '../../../constants';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import Loading from '../../../components/Common/Loading';
import CreateVideoLessonForm from '../../../components/Container/FormListContainer/CreateVideoLessonForm';
import CreateExerciseForm from '../../../components/Container/FormListContainer/CreateExerciseForm';

const CreateLesson = () => {
  const [typeOfLesson, setTypeOfLesson] = useState(true);
  const loading = useSelector((state) => state.course.loading);
  const { courseId } = JSON.parse(sessionStorage.getItem(STORAGE.COURSE));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDetailDraftCourseAction({
        courseId,
      })
    );
  }, [dispatch, courseId]);

  const onChange = (e) => {
    setTypeOfLesson(e.target.value);
  };
  return (
    <Content>
      {loading && <Loading />}
      <div
        className="p-6 min-h-screen h-auto"
        style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
      >
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom step={2} />
        <div className="flex flex-col border border-black bg-white/50 rounded-2xl p-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl mb-5">Create New Lesson</h1>
            <Radio.Group onChange={onChange} defaultValue={typeOfLesson}>
              <Radio.Button value={true}>Lesson</Radio.Button>
              <Radio.Button value={false}>Exercise</Radio.Button>
            </Radio.Group>
          </div>
          {typeOfLesson ? <CreateVideoLessonForm /> : <CreateExerciseForm />}
        </div>
      </div>
    </Content>
  );
};

export default CreateLesson;
