import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const renderContent = () => {
    if (props.guessedWords.length === 0) {
      return (
        <span data-test="component-guess-instructions">
          Congratulations! You guessed Right
        </span>
      );
    }
  };

  return <div data-test="component-guessed-words">{renderContent()}</div>;
};
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;
