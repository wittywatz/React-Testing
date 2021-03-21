import { CORRECT_GUESS } from '../../actions/types';
import { successReducer } from './successReducer';

test('renders false when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('renders TRUE when action CORRECT_GUESS is passed', () => {
  const newState = successReducer(undefined, { type: CORRECT_GUESS });
  expect(newState).toBe(true);
});
