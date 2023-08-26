import React from 'react';
import { Breadcrumb, Button, Form, Input, InputNumber, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCourseAction } from '../../../redux/slice/courseSlice';
import { CREATE_COURSE_FORM_FIELDS } from '../../../constants';
import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';

const CreateCourse = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  console.log(token);
  const onFinish = (values) => {
    console.log('form', values);

    dispatch(
      createNewCourseAction({
        courseName: values.CourseName,
        description: values.Description,
        price: values.Price,
        isFree: values.Price > 0 ? false : true,
        subCateId: values.Category,
        token,
      })
    );
  };

  return (
    <div className="flex">
      <StepsCustom />
      <div className="flex flex-1 flex-col p-6 bg-amber-200">
        <div>
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: 'An Application',
              },
            ]}
          ></Breadcrumb>
        </div>

        <div className=" bg-yellow-100 p-6 ">
          <h1>Create New Course</h1>
          <Form layout="horizontal" onFinish={onFinish}>
            <div className="flex">
              <div className="flex flex-col basis-3/5 p-5">
                <Form.Item label="Course Name" name={CREATE_COURSE_FORM_FIELDS.COURSE_NAME}>
                  <Input />
                </Form.Item>
                <Form.Item label="Category" name={CREATE_COURSE_FORM_FIELDS.CATEGORY}>
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Sub Category" name={CREATE_COURSE_FORM_FIELDS.SUB_CATEGORY}>
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Brief Description" name={CREATE_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION}>
                  <Input />
                </Form.Item>
                <Form.Item label="Price" name={CREATE_COURSE_FORM_FIELDS.PRICE}>
                  <InputNumber className="w-full" />
                </Form.Item>
                <Form.Item label="Description" name={CREATE_COURSE_FORM_FIELDS.DESCRIPTION}>
                  <TextArea rows={4} />
                </Form.Item>
              </div>

              {/* what will learn block */}
              <div className="flex flex-1 flex-col">
                <ExpandedForm
                  title="Knowledge"
                  placeholder="What you will learn"
                  nameFormList={CREATE_COURSE_FORM_FIELDS.WHAT_WILL_LEARN}
                />
                <ExpandedForm
                  title="Requirements"
                  placeholder="Requirement"
                  nameFormList={CREATE_COURSE_FORM_FIELDS.REQUIREMENT}
                />
                <Form.Item className="flex-1 mx-5">
                  <Button type="primary" htmlType="submit" className="w-full">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
