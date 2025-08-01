import { useState } from "react";

import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState();

  function handleSelectSquare(colIndex, rowIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer === "O";
      }
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={() => handleSelectSquare()}
            turns={gameTurns}
          />
        </div>
      </main>
    </>
  );
}

export default App;
