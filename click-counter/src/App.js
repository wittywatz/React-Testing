import React, { Component } from 'react';

export class App extends Component {
  state = { counter: 0 };
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="component-counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test="component-increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
