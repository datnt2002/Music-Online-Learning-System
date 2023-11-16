import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Select, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { CREATE_LESSON_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants/formfield';
import { getDetailLessonAction } from '../../../redux/slice/courseSlice';
import ReactPlayer from 'react-player';
const EditLessonForm = () => {
  const listSections = useSelector((state) => state.course.listSections);
  const currentLesson = useSelector((state) => state.course.currentLesson);
  const [listLesson, setListLesson] = useState([]);
  const [file, setFile] = useState();
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditLesson = (values) => {
    // dispatch(
    //   createNewLessonAction({
    //     sectionId: values.sectionId,
    //     lessonName: values.lessonName,
    //     lessonDescription: values.lessonDescription,
    //     file: file,
    //     navigate,
    //   })
    // );
  };

  const handleChooseSection = (value) => {
    console.log(value);
    const currentSection = listSections.find((section) => section?.sectionId === value);
    setListLesson(currentSection?.Lessons);
  };

  const handleChooseLesson = (lessonId) => {
    console.log(lessonId);
    dispatch(getDetailLessonAction({ lessonId }));
  };

  useEffect(() => {
    form.setFieldsValue(currentLesson);
  }, [currentLesson]);

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <Form form={form} name="create-lesson" onFinish={handleEditLesson} labelWrap {...formLayout}>
      <Form.Item
        label={CREATE_LESSON_FORM_FIELDS.SECTION_LABEL}
        name={CREATE_LESSON_FORM_FIELDS.SECTION_ID}
        rules={[{ required: true, message: VALIDATE_MESSAGE.SECTION_REQUIRED }]}
      >
        <Select onChange={handleChooseSection} className="border rounded-md">
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
        name={CREATE_LESSON_FORM_FIELDS.LESSON_NAME}
        label={CREATE_LESSON_FORM_FIELDS.LESSON_NAME_LABEL}
        rules={[{ required: true, message: VALIDATE_MESSAGE.LESSON_REQUIRED }]}
      >
        <Select onChange={handleChooseLesson} className="border rounded-md">
          {listLesson.map((lesson) => {
            return (
              <Select.Option key={lesson.lessonId} value={lesson.lessonId}>
                {lesson.lessonName}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item name={CREATE_LESSON_FORM_FIELDS.LESSON_ID} label={CREATE_LESSON_FORM_FIELDS.LESSON_ID_LABEL}>
        <Input className="border rounded-md" disabled />
      </Form.Item>

      <Form.Item
        name={CREATE_LESSON_FORM_FIELDS.LESSON_NAME}
        label={CREATE_LESSON_FORM_FIELDS.LESSON_NAME_LABEL}
        rules={[{ required: true, message: VALIDATE_MESSAGE.LESSON_REQUIRED }]}
      >
        <Input className="border rounded-md" />
      </Form.Item>
      <div className="my-6">
        <ReactPlayer
          style={{ margin: 'auto' }}
          url={currentLesson.videoPath}
          playing={false}
          controls={true}
          height="50%"
          width="50%"
        />
      </div>

      <Form.Item label={CREATE_LESSON_FORM_FIELDS.LESSON_VIDEO_LABEL}>
        <Form.Item name={CREATE_LESSON_FORM_FIELDS.LESSON_VIDEO} valuePropName="fileList" getValueFromEvent={() => {}}>
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
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" className="bg-black w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditLessonForm;
