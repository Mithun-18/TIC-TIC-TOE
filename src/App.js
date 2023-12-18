import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import WinnerAnnounce from "./components/WinnerAnnounce";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  return (
    <div className="App">
      {!showGame ? (
        <Player
          showgame={(pX, pO) => {
            setPlayerX(pX);
            setPlayerO(pO);
            setShowGame(true);
          }}
        />
      ) : (
        <GameBoard playerX={playerX} playerO={playerO} />
      )}
      {/* <WinnerAnnounce/> */}
    </div>
  );
}

export default App;
