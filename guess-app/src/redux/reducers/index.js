import { combineReducers } from 'redux';
import { guessedWordReducer } from './guessedWordReducer';
import { secretWordReducer } from './secretWordReducer';
import { successReducer } from './successReducer/successReducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordReducer,
  secretWord: secretWordReducer,
});
