import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Input, Select } from 'antd';

import { CREATE_LESSON_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants/formfield';
import { createNewQuizAction } from '../../../redux/slice/courseSlice';

const EditQuiz = () => {
  const listSections = useSelector((state) => state.course.listSections);
  console.log(listSections);
  const dispatch = useDispatch();

  const handleEditQuiz = (values) => {
    // dispatch(
    //   createNewQuizAction({
    //     sectionId: values.sectionId,
    //     title: values.title,
    //   })
    // );
  };

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <>
      <Form name="edit-quiz" onFinish={handleEditQuiz} labelWrap {...formLayout}>
        <Form.Item
          label={CREATE_LESSON_FORM_FIELDS.SECTION_LABEL}
          name={CREATE_LESSON_FORM_FIELDS.SECTION_ID}
          rules={[{ required: true, message: VALIDATE_MESSAGE.SECTION_REQUIRED }]}
        >
          <Select className="border rounded-md">
            {listSections.map((section) => {
              return (
                <Select.Option key={section.sectionId} value={section.sectionId}>
                  {section.sectionName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_NAME}
          label={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_LABEL}
          rules={[{ required: true, message: VALIDATE_MESSAGE.REQUIRED }]}
        >
          <Select className="border rounded-md">
            {listSections.map((section) => {
              return (
                <Select.Option key={section.sectionId} value={section.sectionId}>
                  {section.sectionName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" className="bg-black w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditQuiz;
