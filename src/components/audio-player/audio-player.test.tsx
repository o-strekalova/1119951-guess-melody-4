import * as React from "react";
import * as renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";
import {noop} from "../../utils";

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`AudioPlayer is rendered correctly`, () => {
  const {song} = mock;

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
