import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, Checkbox, Form, Input, Select, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { CREATE_LESSON_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants/formfield';
import { editDraftQuizAction, getDetailQuizAction } from '../../../redux/slice/courseSlice';

const EditQuiz = () => {
  const listSections = useSelector((state) => state.course.listSections);
  const currentQuiz = useSelector((state) => state.course.currentQuiz);
  const listQuestions = useSelector((state) => state.course.listQuestions);
  const [listQuiz, setListQuiz] = useState([]);
  const [form] = Form.useForm();
  const [formQuestion] = Form.useForm();
  const dispatch = useDispatch();

  const handleEditQuiz = (values) => {
    console.log(values);
    dispatch(
      editDraftQuizAction({
        sectionId: values.sectionId,
        title: values.title,
        quizId: values.quizId,
      })
    );
  };

  const handleSubmitQuestion = (values) => {};

  const handleChooseSection = (value) => {
    const currentSection = listSections.find((section) => section?.sectionId === value);
    setListQuiz(currentSection?.Quizzes);
  };

  const handleChooseQuiz = (value) => {
    console.log(value);
    dispatch(getDetailQuizAction({ quizId: value }));
  };

  useEffect(() => {
    const formattedValues = {
      questions: listQuestions.map((question) => ({
        content: question?.content,
        answer: question?.Answers.map((answer) => ({
          content: answer?.content,
          isCorrect: answer?.isCorrect,
        })),
      })),
    };
    form.setFieldsValue(currentQuiz);
    formQuestion.setFieldsValue(formattedValues);
  }, [currentQuiz, listQuestions]);

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const initValueAnswer = { content: '', isCorrect: false };
  const initValueQuestion = { content: '' };
  return (
    <>
      <Form form={form} name="edit-quiz" onFinish={handleEditQuiz} labelWrap {...formLayout}>
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
          name={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_NAME}
          label={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_LABEL}
          rules={[{ required: true, message: VALIDATE_MESSAGE.REQUIRED }]}
        >
          <Select onChange={handleChooseQuiz} className="border rounded-md">
            {listQuiz.map((quiz) => {
              return (
                <Select.Option key={quiz?.quizId} value={quiz?.quizId}>
                  {quiz?.title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item name={CREATE_LESSON_FORM_FIELDS.QUIZ_ID_NAME} label={CREATE_LESSON_FORM_FIELDS.QUIZ_ID_LABEL}>
          <Input className="border rounded-md" disabled />
        </Form.Item>
        <Form.Item name={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_NAME} label={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_LABEL}>
          <Input className="border rounded-md" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" className="bg-black w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Form
        {...formLayout}
        autoComplete="off"
        onFinish={handleSubmitQuestion}
        initialValues={{
          items: [{}],
        }}
        form={formQuestion}
      >
        <Form.List
          name="questions"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(new Error(VALIDATE_MESSAGE.EXPANDED_REQUIRED));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <div className="flex flex-col gap-4">
              {fields.map((field) => (
                <Card
                  size="small"
                  title={`Question ${field.name + 1}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item
                    label={CREATE_LESSON_FORM_FIELDS.QUESTION_LABEL}
                    name={[field.name, CREATE_LESSON_FORM_FIELDS.QUESTION_CONTENT_NAME]}
                  >
                    <Input />
                  </Form.Item>

                  {/* Nest Form.List */}
                  <Form.Item label={CREATE_LESSON_FORM_FIELDS.ANSWER_LABEL}>
                    <Form.List
                      name={[field.name, CREATE_LESSON_FORM_FIELDS.ANSWER_ARRAY_NAME]}
                      rules={[
                        {
                          validator: async (_, names) => {
                            if (!names || names.length < 1) {
                              return Promise.reject(new Error(VALIDATE_MESSAGE.EXPANDED_REQUIRED));
                            }
                          },
                        },
                      ]}
                    >
                      {(subFields, subOpt, subMeta) => (
                        <div className="flex flex-col gap-4">
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Form.Item noStyle name={[subField.name, CREATE_LESSON_FORM_FIELDS.ANSWER_CONTENT_NAME]}>
                                <Input placeholder={CREATE_LESSON_FORM_FIELDS.ANSWER_LABEL} />
                              </Form.Item>
                              <Form.Item
                                noStyle
                                valuePropName="checked"
                                name={[subField.name, CREATE_LESSON_FORM_FIELDS.CHECKBOX_CORRECT]}
                              >
                                <Checkbox defaultChecked={false}>Correct Answer</Checkbox>
                              </Form.Item>
                              <CloseOutlined
                                className="align-[0.125rem]"
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          <Button type="dashed" onClick={() => subOpt.add(initValueAnswer)} block>
                            + Add Answer
                          </Button>
                          {subMeta.errors && subMeta.errors.length > 0 && (
                            <Form.ErrorList errors={subMeta.errors} className="text-red-600" />
                          )}
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type="dashed" onClick={() => add(initValueQuestion)} block>
                + Add Question
              </Button>
              <Form.ErrorList errors={errors} className="text-red-600" />
            </div>
          )}
        </Form.List>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" className="bg-black w-full mt-4">
            Submit
          </Button>
        </Form.Item>
        {/* <Form.Item noStyle shouldUpdate>
          {() => (
            <Typography>
              <pre>{JSON.stringify(formQuestion.getFieldsValue(), null, 2)}</pre>
            </Typography>
          )}
        </Form.Item> */}
      </Form>
    </>
  );
};

export default EditQuiz;
