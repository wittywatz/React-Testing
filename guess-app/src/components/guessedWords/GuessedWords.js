import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const renderContent = () => {
    if (props.guessedWords.length === 0) {
      return (
        <span data-test="component-guess-instructions">
          Try to guess the secret word
        </span>
      );
    }
    return (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {props.guessedWords.map((word, index) => {
              return (
                <tr key={index} data-test="guessed-word">
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
        <p>Total Guesses: {props.guessedWords && props.guessedWords.length}</p>
      </div>
    );
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
