import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utils/storeFactory';
import { findByTestAttr } from '../../utils/findByTestAttr';
import Input, { Input as UnconnectedInput } from './Input';

//Before you test components receiving props from redux, ensure to set up Redux first
/**
 * Factory function to create shallow wrapper for CongratsComponent
 * @function setup
 * @param {object}  props - Component props specific to this setup
 * @param {object} state - initial setup state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('renders', () => {
  describe('word has not been guesed', () => {
    const initialState = { success: false };
    const wrapper = setup(initialState);
    test('renders component without errors', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const componentInputBox = findByTestAttr(wrapper, 'component-input-box');
      expect(componentInputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'component-submit-button');
      // console.log(submitButton.length);
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guesed', () => {
    const initialState = { success: true };
    const wrapper = setup(initialState);

    test('renders component without errors', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders no input box', () => {
      const componentInputBoxx = findByTestAttr(wrapper, 'component-input-box');
      expect(componentInputBoxx.length).toBe(0);
    });

    test('renders no submit button', () => {
      const submitButtonn = findByTestAttr(wrapper, 'component-submit-button');
      // console.log(submitButtonn);
      expect(submitButtonn.length).toBe(0);
    });
  });
});

describe('update state via redux props', () => {
  test('renders success as a prop', () => {
    const initialState = { success: true };
    const wrapper = setup(initialState);
    const successProp = wrapper.instance().props.success;
    // console.log(successProp);
    expect(successProp).toBe(initialState.success);
  });

  test('guessword action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('renders action creators', () => {
  test('verify that the guessWord action creator is called on click', () => {
    let mockGuessWord = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={mockGuessWord} />);
    wrapper.setState({ currentGuess: 'train' });
    const findButton = findByTestAttr(wrapper, 'component-submit-button');
    findButton.simulate('click', { preventDefault() {} });
    const mockfnCount = mockGuessWord.mock.calls.length;
    expect(mockfnCount).toBe(1);
  });
});

test('calls guessWord action creator with input argument', () => {
  let mockGuessWord = jest.fn();
  const wrapper = shallow(<UnconnectedInput guessWord={mockGuessWord} />);
  wrapper.setState({ currentGuess: 'train' });
  const findButton = findByTestAttr(wrapper, 'component-submit-button');
  findButton.simulate('click', { preventDefault() {} });
  const mockfnCount = mockGuessWord.mock.calls[0][0];
  expect(mockfnCount).toBe('train');
});
describe('verify input clears out', () => {
  test('check that state is cleared', () => {
    let mockGuessWord = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={mockGuessWord} />);
    wrapper.setState({ currentGuess: 'train' });
    const findButton = findByTestAttr(wrapper, 'component-submit-button');
    findButton.simulate('click', { preventDefault() {} });
    const newState = wrapper.state('currentGuess');
    expect(newState).toBe('');
  });
});
