/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/findByTestAttr';
import { checkProps } from '../../utils/checkPropTypes';

import Congrats from './Congrats';

/**
 * Factory function to create shallow wrapper for CongratsComponent
 * @function setup
 * @param {object}  props - Component props specific to this setup
 * @param {object} state - initial setup state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const defaultProps = { success: false };
  const setUpProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setUpProps} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test('renders without errors', () => {
  const wrapper = setup({ success: false }, null);
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false }, null);
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty message when success is true', () => {
  const wrapper = setup({ success: true }, null);
  const message = findByTestAttr(wrapper, 'component-congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('no warning when expected prop is given', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
