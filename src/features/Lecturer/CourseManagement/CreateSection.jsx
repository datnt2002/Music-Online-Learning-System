import React from 'react';
import { Button, Form } from 'antd';

import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import { CREATE_SECTION_FORM_FIELDS } from '../../../constants';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import CourseInfoCard from '../../../components/Container/CardTemplate/CourseInfoCard';
import { Content } from 'antd/es/layout/layout';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';

const CreateSection = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Content>
      <div className="p-6">
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom />

        <Form onFinish={onFinish} name="section-create" className=" flex-1">
          <div className="flex">
            <ExpandedForm
              title="Section"
              nameFormList={CREATE_SECTION_FORM_FIELDS.SECTION_NAME}
              placeholder="Enter section"
            />
            <div className="flex flex-col">
              <div className="m-6">
                <CourseInfoCard />
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
