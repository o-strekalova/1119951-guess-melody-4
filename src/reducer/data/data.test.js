import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data";
import {questions} from "../../components/mocks";
import {noop} from "../../utils";

const api = createAPI(noop);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    questions: [],
  });
});

it(`Reducer should update questions by load questions`, () => {
  expect(reducer({
    questions: [],
  }, {
    type: ActionType.LOAD_QUESTIONS,
    payload: questions,
  })).toEqual({
    questions,
  });
});


describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /questions`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadQuestions();

    apiMock
      .onGet(`/questions`)
      .reply(200, [{fake: true}]);

    return questionLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUESTIONS,
          payload: [{fake: true}],
        });
      });
  });
});
