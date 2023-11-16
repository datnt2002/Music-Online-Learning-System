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
import { useLocation } from 'react-router-dom';
import splitSlash from '../../../utils/splitSlash';
import EditLessonForm from '../../../components/Container/FormListContainer/EditLessonForm';

const EditLesson = () => {
  const [typeOfLesson, setTypeOfLesson] = useState(true);
  const loading = useSelector((state) => state.course.loading);
  const location = useLocation();
  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDetailDraftCourseAction({
        courseId: pathNameArray[2],
      })
    );
  }, []);

  const onChange = (e) => {
    setTypeOfLesson(e.target.value);
  };
  return (
    <Content
      className="p-6 min-h-screen h-auto"
      style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}
    >
      {loading && <Loading />}
      <div>
        <div className="pl-6 mb-6">
          <BreadCrumbCustom />
        </div>

        <div className="flex flex-col border border-black bg-white/50 rounded-2xl p-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl mb-5">Edit Lesson</h1>
            <Radio.Group onChange={onChange} defaultValue={typeOfLesson}>
              <Radio.Button value={true}>Lesson</Radio.Button>
              <Radio.Button value={false}>Exercise</Radio.Button>
            </Radio.Group>
          </div>
          {typeOfLesson ? <EditLessonForm /> : <CreateExerciseForm />}
        </div>
      </div>
    </Content>
  );
};

export default EditLesson;
