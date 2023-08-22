import React from 'react';
import ExpandedForm from '../../components/Container/FormListContainer/ExpandedForm';
import { CREATE_SECTION_FORM_FIELDS } from '../../constants';
import { Button, Form } from 'antd';
import CardTemplate from '../../components/Container/CardTemplate/CardTemplate';
import StepsCustom from '../../components/Container/StepsContainer/StepsCustom';

const CreateSection = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div className="flex">
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
              <CardTemplate />
            </div>
            <Form.Item className="">
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateSection;
