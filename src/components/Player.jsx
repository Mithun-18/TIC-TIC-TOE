import { createRef } from "react";

export default function Player({ showgame }) {
  let playerXRef = createRef(null);
  let playerORef = createRef(null);

  return (
    <div className="playerContainer">
      <div className="player">
        <input type="text" placeholder="Player 'X'" ref={playerXRef} />
        <input type="text" placeholder="Player 'O'" ref={playerORef} />
        <button
          onClick={() => {
            showgame(playerXRef?.current?.value, playerORef?.current?.value);
          }}
        >
          play
        </button>
      </div>
    </div>
  );
}
