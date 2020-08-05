import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {genreQuestion} from "../mocks";
import {noop} from "../../utils";

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={genreQuestion}
      onAnswer={noop}
      renderPlayer={() => null}
      onChange={noop}
      userAnswers={[false, false, false, false]}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
