import * as React from "react";
import * as renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen";
import {artistQuestion} from "../mocks";
import {noop} from "../../utils";

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={artistQuestion}
        onAnswer={noop}
        renderPlayer={() => null}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
