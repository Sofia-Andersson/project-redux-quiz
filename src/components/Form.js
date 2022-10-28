/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { FormStyle, SpanStyle } from 'styledcomponents/FormStyle';

const Form = ({
  setAnswer,
  setOptionIndex,
  answer,
  questionAnswered,
  option,
  index,
  correctIndex,
  answerIndex
}) => {
  const correctOption = index === correctIndex;
  const selectedWrongOption =
    questionAnswered && !correctOption && index === answerIndex;
  return (
    <FormStyle>
      <input
        id={option}
        type="radio"
        key=""
        onChange={(event) => {
          setAnswer(event.target.value);
          setOptionIndex(index);
        }}
        value={option}
        checked={answer === option}
        required
        disabled={questionAnswered}
      />
      <label htmlFor={option} key={option}>
        {/* This code enables the user to not only click on the radio button to select an answer,
        but now it also works with clicking on the actual answer text. */}
        {` ${option}`}
        {/* After choosing an answer option, emojis are shown next to the option text,
        depending on correct or not correct answer. */}
        <SpanStyle visible={questionAnswered}>
          {(correctOption && '✅') || (selectedWrongOption && '❌')}
        </SpanStyle>
      </label>
    </FormStyle>
  );
};

export default Form;
