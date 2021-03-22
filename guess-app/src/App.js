import React, { Component } from 'react';
import Congrats from './components/congrats/Congrats';
import GuessedWords from './components/guessedWords/GuessedWords';
import './App.css';
import { connect } from 'react-redux';
import { getSecretWord } from './redux/actions';
import Input from './components/input/Input';
export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="App container">
        <h1>Guessing Game</h1>
        <p>The Secret Word is '{this.props.secretWord}'</p>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = ({ success, secretWord, guessedWords }) => {
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(App);
