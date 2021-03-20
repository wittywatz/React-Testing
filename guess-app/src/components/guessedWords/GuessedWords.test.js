import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/findByTestAttr';
import { checkProps } from '../../utils/checkPropTypes';

import GuessedWords from './GuessedWords';
const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ],
};
/**
 * Factory function to create shallow wrapper for CongratsComponent
 * @function setup
 * @param {object}  props - Component props specific to this setup
 * @param {object} state - initial setup state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const setUpProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWords {...setUpProps} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test('renders test for expected props without warnings', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  const wrapper = setup({ guessedWords: [] }, null);
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instruction to guess a word', () => {
    const instructions = findByTestAttr(
      wrapper,
      'component-guess-instructions'
    );
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const wrapper = setup();
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders the guessed words section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('renders the exact number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(defaultProps.guessedWords.length);
  });
});
