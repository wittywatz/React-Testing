import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React Component for Congratulatory Messages
 * @function
 * @returns {JSX.Element}
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="component-congrats-message">
          Congratulations! You guessed Right
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats"></div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
