import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  renderForm = () => {
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
        {this.props.success ? null : this.renderForm()}
      </div>
    );
  }
}
const mapStateToProps = ({ success }) => ({ success });
export default connect(mapStateToProps)(Input);
