import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <p>Tic tac toe</p>
      <Game/>
    </div>
  );
}

export default App;

// Game.tsx - Have board and logic( status, )
// Board.tsx - Display game status ()
// Square.tsx - x o empty, clicks or actions 
