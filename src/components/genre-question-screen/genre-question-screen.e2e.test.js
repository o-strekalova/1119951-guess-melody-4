import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import {genreQuestion} from "../mocks";

configure({adapter: new Adapter()});

it(`When user answers genre question form is not sent`, () => {
  const onAnswer = jest.fn();
  const screen = shallow(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={genreQuestion}
        renderPlayer={() => {}}
        onChange={() => {}}
        userAnswers={[false, false, false, false]}
      />);

  const form = screen.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, true, false, false];

  const screen = mount(
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={genreQuestion}
        renderPlayer={() => {}}
        onChange={() => {}}
        userAnswers={userAnswer}
      />);

  const form = screen.find(`form`);
  const inputTwo = screen.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  expect(
      screen
        .find(`input`)
        .map((it) => it.prop(`checked`)))
  .toEqual(userAnswer);
});
