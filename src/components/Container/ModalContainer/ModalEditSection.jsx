import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { EDIT_SECTION_FORM_FIELDS } from '../../../constants';

const ModalEditSection = ({ form, data, onFinish }) => {
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  const formLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 19 },
  };
  return (
    <Form form={form} layout="horizontal" onFinish={onFinish} {...formLayout}>
      <div className="flex">
        <div className="flex flex-col flex-1 p-5">
          <Form.Item name={EDIT_SECTION_FORM_FIELDS.COURSE_ID} label={EDIT_SECTION_FORM_FIELDS.COURSE_ID_LABEL}>
            <Input disabled />
          </Form.Item>
          <Form.Item name={EDIT_SECTION_FORM_FIELDS.SECTION_ID} label={EDIT_SECTION_FORM_FIELDS.SECTION_ID_LABEL}>
            <Input disabled />
          </Form.Item>
          <Form.Item name={EDIT_SECTION_FORM_FIELDS.SECTION_NAME} label={EDIT_SECTION_FORM_FIELDS.TITLE}>
            <Input />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default ModalEditSection;
