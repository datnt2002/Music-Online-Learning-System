import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form } from 'antd';
import { Content } from 'antd/es/layout/layout';

import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import CourseInfoCard from '../../../components/Container/CardTemplate/CourseInfoCard';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CREATE_SECTION_FORM_FIELDS, STORAGE } from '../../../constants';
import { createNewSectionAction } from '../../../redux/slice/courseSlice';

const CreateSection = () => {
  const currentCourse = JSON.parse(sessionStorage.getItem(STORAGE.COURSE));
  console.log(currentCourse);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitSection = (values) => {
    console.log('Received values of form:', values);

    dispatch(
      createNewSectionAction({
        sectionName: values.sectionName[0].items,
        courseId: currentCourse.courseId,
        navigate,
      })
    );
  };

  return (
    <Content>
      <div className="p-6">
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom step={1} />

        <Form onFinish={handleSubmitSection} name="section-create" className=" flex-1">
          <div className="flex">
            <ExpandedForm
              title={CREATE_SECTION_FORM_FIELDS.TITLE}
              nameFormList={CREATE_SECTION_FORM_FIELDS.SECTION_NAME}
              placeholder={CREATE_SECTION_FORM_FIELDS.SECTION_PLACEHOLDER}
            />
            <div className="flex flex-col">
              <div className="m-6">
                <CourseInfoCard currentCourse={currentCourse} />
              </div>
              <Form.Item className="mx-auto shadow-xl">
                <Button type="primary" htmlType="submit" className=" bg-amber-500 w-80 ">
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
