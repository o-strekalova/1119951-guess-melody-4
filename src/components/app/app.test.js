import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {questions} from "../mocks";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../reducer/user/user";

const mockStore = configureStore([]);

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 0,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={-1}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={0}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GameOverScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={3}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render WinScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={3}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render AuthScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={3}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
