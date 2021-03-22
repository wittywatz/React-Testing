import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../redux/actions';

export class Input extends Component {
  renderForm = (success) => {
    if (success) {
      return null;
    }
    return (
      <form className={'form-inline'}>
        <input
          data-test="component-input-box"
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="Enter your guess"
        />
        <button
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
