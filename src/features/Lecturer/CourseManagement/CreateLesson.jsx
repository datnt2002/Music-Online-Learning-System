import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Select, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';

import StepsCustom from '../../../components/Container/StepsContainer/StepsCustom';
import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { CREATE_LESSON_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants/formfield';
import { createNewLessonAction, getDetailPendingCourseAction } from '../../../redux/slice/courseSlice';
import { STORAGE } from '../../../constants';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';
import Loading from '../../../components/Common/Loading';

const CreateLesson = () => {
  const [file, setFile] = useState();
  const [form] = Form.useForm();
  const { courseId } = JSON.parse(sessionStorage.getItem(STORAGE.COURSE));
  const loading = useSelector((state) => state.course.loading);
  const listSections = useSelector((state) => state.course.listSections);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getDetailPendingCourseAction({
        courseId,
      })
    );
  }, [dispatch, courseId]);

  const handleSubmitLesson = (values) => {
    console.log(values, file);
    dispatch(
      createNewLessonAction({
        sectionId: values.sectionId,
        lessonName: values.lessonName,
        lessonDescription: values.lessonDescription,
        file: file,
        navigate,
      })
    );

    form.resetFields();
  };

  return (
    <Content>
      {loading && <Loading />}
      <div className="p-6" style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto' }}>
        <div className="pl-6">
          <BreadCrumbCustom />
        </div>
        <StepsCustom step={2} />
        <div className="flex flex-col border border-black bg-white/50 rounded-2xl p-6">
          <h1 className="font-semibold text-2xl mb-5">Create New Lesson</h1>
          <Form form={form} name="create-lesson" onFinish={handleSubmitLesson}>
            <Form.Item
              label={CREATE_LESSON_FORM_FIELDS.SECTION_LABEL}
              name={CREATE_LESSON_FORM_FIELDS.SECTION_ID}
              rules={[{ required: true, message: VALIDATE_MESSAGE.SECTION_REQUIRED }]}
            >
              <Select className="border border-black rounded-md">
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
              <Input className="border border-black rounded-md" />
            </Form.Item>

            <Form.Item
              name={CREATE_LESSON_FORM_FIELDS.LESSON_DESCRIPTION}
              label={CREATE_LESSON_FORM_FIELDS.LESSON_DESCRIPTION_LABEL}
              rules={[{ required: true, message: VALIDATE_MESSAGE.LESSON_DESCRIPTION_REQUIRED }]}
            >
              <Input.TextArea rows={4} className="border border-black rounded-md" />
            </Form.Item>

            <Form.Item label={CREATE_LESSON_FORM_FIELDS.LESSON_VIDEO_LABEL}>
              <Form.Item
                name={CREATE_LESSON_FORM_FIELDS.LESSON_VIDEO}
                valuePropName="fileList"
                getValueFromEvent={() => {}}
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
              <Button type="primary" htmlType="submit" className="bg-black w-full">
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
