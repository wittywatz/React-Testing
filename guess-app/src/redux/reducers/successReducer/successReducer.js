import { CORRECT_GUESS } from '../../actions/types';

export const successReducer = (state, action) => {
  switch (action.type) {
    case CORRECT_GUESS:
      return true;
    default:
      return false;
  }
};
