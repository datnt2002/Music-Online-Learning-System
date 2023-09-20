import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';

import { CHANGE_PASSWORD_FORM_FIELDS, VALIDATE_MESSAGE } from '../../constants';
import { changePasswordAction } from '../../redux/slice/authenticationSlice';

const ChangePassword = ({ handleOk }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('form', values);
    dispatch(
      changePasswordAction({
        oldPassword: values.old_password,
        newPassword: values.new_password,
      })
    );
    handleOk();
  };
  return (
    <Form id={CHANGE_PASSWORD_FORM_FIELDS.FORM_ID} onFinish={onFinish}>
      <Form.Item label={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD_LABEL} name={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD}>
        <Input.Password placeholder={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD_LABEL} />
      </Form.Item>
      <Form.Item label={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD_LABEL} name={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD}>
        <Input.Password placeholder={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD_LABEL} />
      </Form.Item>
      <Form.Item
        label={CHANGE_PASSWORD_FORM_FIELDS.CONFIRM_PASSWORD_LABEL}
        name={CHANGE_PASSWORD_FORM_FIELDS.CONFIRM_PASSWORD}
        dependencies={[CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD]}
        hasFeedback
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue(CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD) === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(VALIDATE_MESSAGE.PASSWORD_NOT_MATCH));
            },
          }),
        ]}
      >
        <Input.Password placeholder={CHANGE_PASSWORD_FORM_FIELDS.CONFIRM_PASSWORD_LABEL} />
      </Form.Item>
    </Form>
  );
};

export default ChangePassword;
