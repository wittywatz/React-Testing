import { storeFactory } from '../utils/storeFactory';

import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    const initialState = { secretWord };
    const store = storeFactory(initialState);
    test('updates state correctly for unsuccessful guesses', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guesses', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      // console.log(newState);
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    const store = storeFactory(initialState);
    test('updates state correctly for unsuccessful guesses', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      console.log(newState);
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guesses', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      console.log(newState);
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
