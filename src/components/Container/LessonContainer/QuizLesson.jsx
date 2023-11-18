import { Radio } from 'antd';
import React from 'react';

const QuizLesson = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Updated At </p>

      <div>
        <h1>Questions? </h1>
        <h1>Choose the correct answer</h1>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default QuizLesson;
