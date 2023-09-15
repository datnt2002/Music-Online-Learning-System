import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Input, InputNumber, Select, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import { createNewCourseAction } from '../../../redux/slice/courseSlice';
import { CREATE_COURSE_FORM_FIELDS } from '../../../constants';
import ExpandedForm from '../../../components/Container/FormListContainer/ExpandedForm';
import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
  const [file, setFile] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('form', values);

    dispatch(
      createNewCourseAction({
        courseName: values.courseName,
        description: values.description,
        price: values.price,
        isFree: values.price > 0 ? false : true,
        subCateId: values.subcategory,
        file: file,
        navigate,
      })
    );
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    // setFile(e.file);
  };

  return (
    <Content>
      <div className="flex flex-1 flex-col p-6 ">
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom />

        {/* form */}
        <div className="bg-white shadow-xl rounded-2xl p-6 ">
          <h1 className="font-semibold text-2xl">Create New Course</h1>
          <Form layout="horizontal" onFinish={onFinish}>
            <div className="flex">
              <div className="flex flex-col basis-3/5 p-5">
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.COURSE_NAME_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.COURSE_NAME}
                >
                  <Input />
                </Form.Item>
                <Form.Item label={CREATE_COURSE_FORM_FIELDS.CATEGORY_LABEL} name={CREATE_COURSE_FORM_FIELDS.CATEGORY}>
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.SUB_CATEGORY_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.SUB_CATEGORY}
                >
                  <Select>
                    <Select.Option value="1">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.BRIEF_DESCRIPTION}
                >
                  <Input />
                </Form.Item>
                <Form.Item label={CREATE_COURSE_FORM_FIELDS.PRICE_LABEL} name={CREATE_COURSE_FORM_FIELDS.PRICE}>
                  <InputNumber className="w-full" />
                </Form.Item>
                <Form.Item
                  label={CREATE_COURSE_FORM_FIELDS.DESCRIPTION_LABEL}
                  name={CREATE_COURSE_FORM_FIELDS.DESCRIPTION}
                >
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item label={CREATE_COURSE_FORM_FIELDS.COURSE_IMAGE_LABEL}>
                  <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload.Dragger
                      name="files"
                      maxCount={1}
                      customRequest={(info) => {
                        console.log(info);
                        setFile(info.file);
                      }}
                    >
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single upload.</p>
                    </Upload.Dragger>
                  </Form.Item>
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
                  <Button type="primary" htmlType="submit" className="bg-amber-500 w-full">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Content>
  );
};

export default CreateCourse;
