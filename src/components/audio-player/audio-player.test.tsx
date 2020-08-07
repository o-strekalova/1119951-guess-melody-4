import * as React from "react";
import * as renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";
import {noop} from "../../utils";

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <AudioPlayer
        isLoading={true}
        isPlaying={false}
        onPlayButtonClick={noop}
      >
        <audio />
      </AudioPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
