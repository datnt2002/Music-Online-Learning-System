import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Form } from 'antd';
import { Content } from 'antd/es/layout/layout';

import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import CourseInfoCard from '../../../components/Container/CardTemplate/CourseInfoCard';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CREATE_SECTION_FORM_FIELDS } from '../../../constants';
import { createNewSectionAction, getDetailDraftCourseAction } from '../../../redux/slice/courseSlice';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import Loading from '../../../components/Common/Loading';
import splitSlash from '../../../utils/splitSlash';

const CreateSection = () => {
  const loading = useSelector((state) => state.course.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;
  const pathNameArray = splitSlash(pathname);

  useEffect(() => {
    dispatch(
      getDetailDraftCourseAction({
        courseId: pathNameArray[2],
      })
    );
  }, []);

  const handleSubmitSection = (values) => {
    console.log('Received values of form:', values);
    console.log(pathNameArray[2]);
    dispatch(
      createNewSectionAction({
        sections: values.sectionName,
        courseId: pathNameArray[2],
        navigate,
      })
    );
  };

  return (
    <Content>
      {loading && <Loading />}
      <div className="p-6 h-screen" style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom step={1} />

        <Form onFinish={handleSubmitSection} name="section-create" className="flex-1">
          <div className="flex">
            <ExpandedForm
              title={CREATE_SECTION_FORM_FIELDS.TITLE}
              nameFormList={CREATE_SECTION_FORM_FIELDS.SECTION_NAME}
              placeholder={CREATE_SECTION_FORM_FIELDS.SECTION_PLACEHOLDER}
            />
            <div className="flex flex-col">
              <div className="m-6">
                <CourseInfoCard />
              </div>
              <Form.Item className="mx-auto shadow-xl">
                <Button type="primary" htmlType="submit" className=" bg-black w-80 ">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </Content>
  );
};

export default CreateSection;
