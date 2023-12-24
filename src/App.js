import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import SelectMode from "./components/SelectMode";

function App() {
  const [showMode, setMode] = useState(true);
  const [showPlayerNameEntry, setShowPlayerNameEntry] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [multiplayer, setMultiplayer] = useState(false);
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  return <div className="App">{_renderScreens()}</div>;

  function _renderScreens() {
    if (showMode) return _renderMode();
    if (showPlayerNameEntry) return _renderPlayerNameEntry();
    if (showGame) return _renderGame();
    return <></>;
  }

  function _renderMode() {
    return (
      <SelectMode
        onSelect={(multimode) => {
          setMultiplayer(multimode);
          if (multimode) {
            setShowPlayerNameEntry(true);
          } else {
            setShowPlayerNameEntry(false);
            setShowGame(true);
          }
          setMode(false);
        }}
      />
    );
  }

  function _renderPlayerNameEntry() {
    return (
      <Player
        showgame={(pX, pO) => {
          setPlayerX(pX);
          setPlayerO(pO);
          setShowGame(true);
          setShowPlayerNameEntry(false);
        }}
      />
    );
  }

  function _renderGame() {
    return (
      <GameBoard
        playerX={playerX}
        playerO={playerO}
        multiplayer={multiplayer}
        goBack={() => {
          setShowGame(false);
          setShowPlayerNameEntry(false);
          setMultiplayer(false);
          setMode(true);
        }}
      />
    );
  }
}

export default App;
