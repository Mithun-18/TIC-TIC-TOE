import { useState } from "react";
import "./style.css";

let arr = Array(9).fill("");
let totalMoves = 0;

export default function GameBoard() {
  let [turn, setTurn] = useState("X");

  function clicked(e) {
    if (arr[parseInt(e.target.id)] === "") {
      e.target.innerHTML = turn === "X" ? "X" : "O";
      arr[parseInt(e.target.id)] = turn;
      turn === "X" ? setTurn("O") : setTurn("X");
      totalMoves++;
      let win = winner();
      if (win) {
        win === "X" ? alert("Winner is X") : alert("Winner is O");
        window.location.reload();
      } 
      
      else if (totalMoves === 9) {
        alert("Match Drawn");
        window.location.reload();
      }
    }
  }

  function winner() {
    let filled = [
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [0, 3, 6],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < filled.length; i++) {
      if (
        arr[filled[i][0]] === arr[filled[i][1]] &&
        arr[filled[i][0]] === arr[filled[i][2]]
      ) {
        return arr[filled[i][0]];
      }
    }
  }

  return (
    <div className="game-container">
      <h1>TIC TIC TOE</h1>
      <div
        className="gameBoard"
        onClick={(e) => clicked(e)}
      >
        <div className="box" id="0"></div>
        <div className="box" id="1"></div>
        <div className="box" id="2"></div>
        <div className="box" id="3"></div>
        <div className="box" id="4"></div>
        <div className="box" id="5"></div>
        <div className="box" id="6"></div>
        <div className="box" id="7"></div>
        <div className="box" id="8"></div>
      </div>
    </div>
  );
}
