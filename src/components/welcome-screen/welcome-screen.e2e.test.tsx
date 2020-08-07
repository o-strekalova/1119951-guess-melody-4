import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Press welcome button`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = Enzyme.shallow(
      <WelcomeScreen
        errorsCount={3}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);
  welcomeButton.simulate(`click`);

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
