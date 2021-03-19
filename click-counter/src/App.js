import React, { Component } from 'react';

export class App extends Component {
  state = { counter: 0, error: '' };
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="component-counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <p style={{ color: 'red' }} data-test="component-error-display">
          {this.state.error}
        </p>
        <button
          data-test="component-increment-button"
          onClick={() => {
            if (this.state.error) {
              this.setState({ error: '' });
            }
            return this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment Counter
        </button>
        <button
          data-test="component-decrement-button"
          onClick={() => {
            this.state.counter === 0
              ? this.setState({ error: 'The counter can not go below zero' })
              : this.setState({ counter: this.state.counter - 1 });
          }}
        >
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
