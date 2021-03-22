/* eslint-disable no-unused-vars */
import axios from 'axios';
import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from './types';
import { getLetterMatchCount } from '../../helpers';

export const guessWord = (guessedWord) => (dispatch) => {
  // const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, 'party');
  dispatch({ type: GUESS_WORD, payload: { guessedWord, letterMatchCount } });
  if (guessedWord === 'party') {
    dispatch({ type: CORRECT_GUESS });
  }
};

export const getSecretWord = () => async (dispatch, getState) => {
  // const response = await axios.get('/');
  dispatch({ type: SET_SECRET_WORD, payload: 'party' });
};
