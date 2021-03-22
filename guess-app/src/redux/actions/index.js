import { CORRECT_GUESS, GUESS_WORD } from './types';
import { getLetterMatchCount } from '../../helpers';

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({ type: GUESS_WORD, payload: { guessedWord, letterMatchCount } });
  if (guessedWord === secretWord) {
    dispatch({ type: CORRECT_GUESS });
  }
};
