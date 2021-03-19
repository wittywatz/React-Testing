// import { render, screen } from '@testing-library/react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create shallow wrapper for AppComponent
 * @function setup
 * @param {object}  props - Componenr props specific to this setup
 * @param {object} state - initial setup state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

/**
 * Return shallowWrappercontainind node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, 'component-increment-button');
  expect(buttonComponent.length).toBe(1);
});
test('renders decrement button', () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, 'component-decrement-button');
  expect(buttonComponent.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplayComponent = findByTestAttr(
    wrapper,
    'component-counter-display'
  );
  expect(counterDisplayComponent.length).toBe(1);
});
test('renders error message', () => {
  const wrapper = setup();
  const componentError = findByTestAttr(wrapper, 'component-error-display');
  expect(componentError.length).toBe(1);
});

test('renders counter starting at zero', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('renders error initial state', () => {
  const wrapper = setup();
  const initialErrorState = wrapper.state('error');
  expect(initialErrorState).toBe('');
});

test('renders click button increments counter display', () => {
  const counter = 6;
  const wrapper = setup({}, { counter });

  const button = findByTestAttr(wrapper, 'component-increment-button');
  button.simulate('click');

  //Find display and test the value
  const counterDisplayComponent = findByTestAttr(
    wrapper,
    'component-counter-display'
  );
  expect(counterDisplayComponent.text()).toContain(counter + 1);
});

test('renders click button decrements counter', () => {
  const counter = 6;
  const wrapper = setup({}, { counter });
  const button = findByTestAttr(wrapper, 'component-decrement-button');
  button.simulate('click');

  const decreaseCountDisplay = findByTestAttr(
    wrapper,
    'component-counter-display'
  );
  expect(decreaseCountDisplay.text()).toContain(counter - 1);
});

test('renders click button decrements counter below 0', () => {
  const counter = 0;
  const wrapper = setup({}, { counter });
  const button = findByTestAttr(wrapper, 'component-decrement-button');
  button.simulate('click');

  const decreaseCountDisplay = findByTestAttr(
    wrapper,
    'component-error-display'
  );
  expect(decreaseCountDisplay.text()).toContain('below zero');
});
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
