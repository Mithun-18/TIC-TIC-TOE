import GameBoard, { pNames } from "./GameBoard";

export default function Player({ showgame }) {
  return (
    <div className="playerContainer">
      <div className="player">
        <input type="text" placeholder="Player 'X'" id="X" />
        <input type="text" placeholder="Player 'O'" id="O" />
        <button
          onClick={() => {
            showgame(
              document.getElementById("X").value,
              document.getElementById("O").value
            );
          }}
        >
          play
        </button>
      </div>
    </div>
  );
}
