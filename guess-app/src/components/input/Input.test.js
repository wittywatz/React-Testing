import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utils/storeFactory';
import { findByTestAttr } from '../../utils/findByTestAttr';
import Input from './Input';

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
  // console.log(wrapper.debug());
  return wrapper;
};

describe('renders', () => {
  describe('word has not ben guesed', () => {
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
      expect(submitButton.length).toBe(1);
    });
  });
});

describe('update state', () => {
  describe('word has not ben guesed', () => {
    test('renders component without errors', () => {});
    test('renders no input box', () => {});
    test('renders no submit button', () => {});
  });
});
