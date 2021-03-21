/**
 * @method GetLettterMatchCount
 * @param {string} guessedWord - GuessWord
 * @param {string} SecretWord - SecretWord
 * @returns {number} - Number of matching letters between guessed word and SecretWord
 *
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
  //Secret Word contains only Unique Letters
  const secretLetterSet = new Set(secretWord.toLowerCase().split(''));
  const guessedletterSet = new Set(guessedWord.toLowerCase().split(''));
  // console.log(secretLetterSet);
  const match = [...secretLetterSet].filter((letter) =>
    guessedletterSet.has(letter)
  ).length;
  // console.log(match);
  return match;
};
