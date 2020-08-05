import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen";
import {artistQuestion} from "../mocks";
import {noop} from "../../utils";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault: noop,
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `John Snow`,
    picture: `https://api.adorable.io/avatars/128/A`,
  };

  const screen = shallow(
      <ArtistQuestionScreen
        onAnswer={onAnswer}
        question={artistQuestion}
        renderPlayer={() => null}
      />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(artistQuestion);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
