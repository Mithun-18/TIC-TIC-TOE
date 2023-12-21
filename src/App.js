import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import SelectMode from "./components/SelectMode";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [multiplayer, setmultiplayer] = useState("");
  const [showMode, setMode] = useState(true);

  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  return (
    <div className="App">
      {showMode ? (
        <SelectMode
          multimode={() => {
            setmultiplayer(true);
            setMode(false);
          }}
          systemmode={() => {
            setmultiplayer(false);
            setMode(false);
          }}
        />
      ) : multiplayer ? (
        !showGame ? (
          <Player
            showgame={(pX, pO) => {
              setPlayerX(pX);
              setPlayerO(pO);
              setShowGame(true);
            }}
          />
        ) : (
          <GameBoard playerX={playerX} playerO={playerO} multiplayer={multiplayer}/>
        )
      ) : (
        <GameBoard playerX={playerX} playerO={playerO} multiplayer={multiplayer}/>
      )}
    </div>
  );
}

export default App;
