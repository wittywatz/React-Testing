import React, { Component } from 'react';
import Congrats from './components/congrats/Congrats';
import GuessedWords from './components/guessedWords/GuessedWords';
import './App.css';
export class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Guessing Game</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'agile', letterMatchCount: 1 },
            { guessedWord: 'party', letterMatchCount: 5 },
          ]}
        />
      </div>
    );
  }
}

export default App;
