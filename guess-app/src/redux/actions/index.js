import axios from 'axios';
import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from './types';
import { getLetterMatchCount } from '../../helpers';

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({ type: GUESS_WORD, payload: { guessedWord, letterMatchCount } });
  if (guessedWord === secretWord) {
    dispatch({ type: CORRECT_GUESS });
  }
};

export const getSecretWord = () => async (dispatch, getState) => {
  const response = await axios.get('/');
  dispatch({ type: SET_SECRET_WORD, payload: response.data });
};
