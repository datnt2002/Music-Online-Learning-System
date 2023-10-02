import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';

import { CHANGE_PASSWORD_FORM_FIELDS, VALIDATE_MESSAGE } from '../../constants';
import { changePasswordAction } from '../../redux/slice/authenticationSlice';

const ChangePassword = ({ handleOk }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(
      changePasswordAction({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })
    );
    handleOk();
  };
  return (
    <Form id={CHANGE_PASSWORD_FORM_FIELDS.FORM_ID} onFinish={onFinish}>
      <Form.Item
        label={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD_LABEL}
        name={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD}
        rules={[
          {
            required: true,
            message: VALIDATE_MESSAGE.PASSWORD_REQUIRED,
          },
          { min: 6, message: VALIDATE_MESSAGE.PASSWORD_LENGTH },
        ]}
        hasFeedback
      >
        <Input.Password placeholder={CHANGE_PASSWORD_FORM_FIELDS.OLD_PASSWORD_LABEL} />
      </Form.Item>
      <Form.Item
        label={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD_LABEL}
        name={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD}
        rules={[
          {
            required: true,
            message: VALIDATE_MESSAGE.PASSWORD_REQUIRED,
          },
          { min: 6, message: VALIDATE_MESSAGE.PASSWORD_LENGTH },
        ]}
        hasFeedback
      >
        <Input.Password placeholder={CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD_LABEL} />
      </Form.Item>
      <Form.Item
        label={CHANGE_PASSWORD_FORM_FIELDS.CONFIRM_PASSWORD_LABEL}
        name={CHANGE_PASSWORD_FORM_FIELDS.CONFIRM_PASSWORD}
        dependencies={[CHANGE_PASSWORD_FORM_FIELDS.NEW_PASSWORD]}
        hasFeedback
        rules={[
          {
            required: true,
            message: VALIDATE_MESSAGE.PASSWORD_REQUIRED,
          },
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
