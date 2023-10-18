import React, { useEffect } from 'react';
import { Form, Input } from 'antd';

import { EDIT_CATEGORY_FORM_FIELDS } from '../../../constants';

const ModalEditCategory = ({ form, data, onFinish }) => {
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <div className="flex">
        <div className="flex flex-col flex-1 p-5">
          <Form.Item name={EDIT_CATEGORY_FORM_FIELDS.CATE_ID} label={EDIT_CATEGORY_FORM_FIELDS.CATE_ID_LABEL}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            name={EDIT_CATEGORY_FORM_FIELDS.CATEGORY_NAME}
            label={EDIT_CATEGORY_FORM_FIELDS.CATEGORY_NAME_LABEL}
          >
            <Input />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default ModalEditCategory;
