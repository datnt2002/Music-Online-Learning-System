import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CREATE_LESSON_FORM_FIELDS } from '../../../constants/formfield';
import { useNavigate } from 'react-router-dom';
import { createNewLessonAction } from '../../../redux/slice/courseSlice';

const CreateLesson = () => {
  const [file, setFile] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLesson = (values) => {
    console.log(values, file);
    dispatch(
      createNewLessonAction({
        lessonName: values.lessonName,
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
      <div className="p-6">
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom />
        <div className="flex flex-col border bg-white shadow-2xl rounded-2xl p-6">
          <h1 className="font-semibold text-2xl">Create New Lesson</h1>
          <Form name="create-lesson" onFinish={handleSubmitLesson}>
            <Form.Item name={CREATE_LESSON_FORM_FIELDS.LESSON_NAME} label={CREATE_LESSON_FORM_FIELDS.LESSON_NAME_LABEL}>
              <Input />
            </Form.Item>

            <Form.Item
              name={CREATE_LESSON_FORM_FIELDS.LESSON_DESCRIPTION}
              label={CREATE_LESSON_FORM_FIELDS.LESSON_DESCRIPTION_LABEL}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item label={CREATE_LESSON_FORM_FIELDS.LESSON_VIDEO_LABEL}>
              <Form.Item
                name={CREATE_LESSON_FORM_FIELDS.LESSON_VIDEO}
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
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
                  <p className="ant-upload-hint">Support for a single video.</p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="bg-amber-500 w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
};

export default CreateLesson;
