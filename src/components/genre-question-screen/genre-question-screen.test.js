import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';
import {genreQuestion} from "../mocks";

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionScreen
      question={genreQuestion}
      onAnswer={() => {}}
      renderPlayer={() => {}}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
