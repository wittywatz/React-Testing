import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../redux/actions';

export class Input extends Component {
  state = { currentGuess: '' };
  handleGuesses = (event) => {
    event.preventDefault();
    const guess = this.state.currentGuess;
    if (guess && guess.length > 0) {
      this.props.guessWord(guess);
    }
  };
  renderForm = (success) => {
    if (success) {
      return null;
    }
    return (
      <form className={'form-inline'}>
        <input
          data-test="component-input-box"
          type="text"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
          className="mb-2 mx-sm-3"
          placeholder="Enter your guess"
        />
        <button
          onClick={this.handleGuesses}
          data-test="component-submit-button"
          type="submit"
          className="btn btn-primary mb-2"
        >
          Enter
        </button>
      </form>
    );
  };
  render() {
    return (
      <div data-test="component-input">
        {this.renderForm(this.props.success)}
      </div>
    );
  }
}
const mapStateToProps = ({ success }) => {
  return { success };
};
export default connect(mapStateToProps, { guessWord })(Input);
