import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../../utils/storeFactory';
import { findByTestAttr } from '../../utils/findByTestAttr';
import { Input } from './Input';

/**
 * Factory function to create shallow wrapper for CongratsComponent
 * @function setup
 * @param {object}  props - Component props specific to this setup
 * @param {object} state - initial setup state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  // const store = storeFactory(initialState);
  // store = { store };
  const wrapper = shallow(<Input {...initialState} />);
  // .dive()
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

describe('update state', () => {});
