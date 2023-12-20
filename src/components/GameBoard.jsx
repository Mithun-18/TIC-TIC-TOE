import { useState } from "react";
import "./style.css";
import WinnerAnnounce from "./WinnerAnnounce";

let arr = Array(9).fill("");
let totalMoves = 0;
// let cputurn = false;

export default function GameBoard({ playerX, playerO }) {
  // let [turn, setTurn] = useState("X");
  let turn = "X";
  const [winnerName, setWinnerName] = useState("");
  const [cputurn, setcputurn] = useState(false);

  if (playerX === "") playerX = "player X";
  if (playerO === "") playerO = "player O";

  function WinnerCheking() {
    let win = winner();
    if (win) {
      setWinnerName(
        win === "X" ? `Winner is ${playerX} ` : `Winner is ${playerO}`
      );
    } else if (totalMoves === 9) {
      setWinnerName("Match drawn");
    }
  }

  function clicked(e) {
    if (arr[parseInt(e.target.id)] === "") {
      e.target.innerHTML = turn === "X" ? "X" : "O";
      arr[parseInt(e.target.id)] = turn;
      // turn === "X" ? setTurn("O") : setTurn("X");
      turn === "X" ? (turn = "O") : (turn = "X");
      totalMoves++;
      WinnerCheking();
      console.log(arr);
      setcputurn(true);
      // cputurn = true;
      cpuMove();
    }
  }
  // console.log(cputurn);
  // if (cputurn) {
  //   cpuMove();
  //   console.log("cpu turn");
  // }

  function cpuMove() {
    if (cputurn) {
      let x;
      do {
        x = parseInt(Math.random() * 8);
      } while (arr[x] !== "");

      if (arr[x] === "") {
        document.getElementById(x.toString()).innerHTML =
          turn === "X" ? "X" : "O";
        arr[x] = turn;
        // turn === "X" ? setTurn("O") : setTurn("X");
        turn === "X" ? (turn = "O") : (turn = "X");
        totalMoves++;
        WinnerCheking();
        console.log(arr);
        // cputurn = false;
        setcputurn(true);
      }
    }
  }

  function winner() {
    let filled = [
      [1, 4, 7],
      [0, 3, 6],
      [2, 5, 8],
      [0, 4, 8],
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

  function reload() {
    let collection = document.getElementsByClassName("box");
    for (let i = 0; i < collection.length; i++) {
      collection[i].innerHTML = "";
    }
    setWinnerName("");
    arr.fill("");
    totalMoves = 0;
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          filter: winnerName === "" ? "blur(0px)" : "blur(2px)",
        }}
      >
        <div className="game-container">
          <h1 className="gameHeading">TIC TIC TOE</h1>
          <div className="gameBoard" onClick={clicked}>
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
      </div>
      {winnerName === "" ? (
        <></>
      ) : (
        <WinnerAnnounce winnerName={winnerName} reload={reload} />
      )}
    </>
  );
}
