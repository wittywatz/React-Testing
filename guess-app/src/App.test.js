import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from './utils/storeFactory';
import App, { App as UnconnectedApp } from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // console.log(store.getState());
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('App receives expected props', () => {
  test('renders success prop to app', () => {
    const initialState = { success: true };
    const wrapper = setup(initialState);
    const successProp = wrapper.instance().props.success;
    // console.log(successProp);
    expect(successProp).toBe(initialState.success);
  });

  test('renders secretWord to app', () => {
    const initialState = { secretWord: 'party' };
    const wrapper = setup(initialState);
    const secretProp = wrapper.instance().props.secretWord;
    // console.log(secretProp);
    expect(secretProp).toBe(initialState.secretWord);
  });
  test('renders guesswords to app', () => {
    // const initialState = { secretWord: 'party' };
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessedWords;
    // console.log(secretProp);
    expect(guessWordProp).toBeInstanceOf(Array);
  });

  test('renders secretWord action to app', () => {
    // const initialState = { secretWord: 'party' };
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    // console.log(secretProp);
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('prop receives getSecretWord action on component did mount', () => {
  const getSecretWordMock = jest.fn();

  //SetUp app to receive the mock fxn
  const wrapper = shallow(
    <UnconnectedApp
      getSecretWord={getSecretWordMock}
      success={true}
      guessedWords={[]}
    />
  );

  //Run lifeCycle method
  wrapper.instance().componentDidMount();

  //Check if mock fxn ran
  const getSecretWordsMockCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordsMockCount).toBe(1);
});
