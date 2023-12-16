import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [showGame, setShowGame] = useState(false);
  return (
    <div className="App">
      {!showGame ? (
        <Player
          showgame={() => {
            setShowGame(true);
          }}
        />
      ) : (
        <GameBoard />
      )}
    </div>
  );
}

export default App;
