import { useEffect, useRef, useState } from "react";
import WinnerAnnounce from "./WinnerAnnounce";
import "./style.css";

export default function GameBoard({ playerX, playerO, multiplayer, goBack }) {
  const [movesArray, setMovesArray] = useState(Array(9).fill(""));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winTitle, setWinTitle] = useState("");
  const [systemMove, setSystemMove] = useState(false);
  const elementsRef = useRef([]);

  useEffect(() => {
    if (systemMove) {
      handleSystemMove();
    }
  }, [systemMove]);

  useEffect(() => {
    console.log(
      "change in state",
      movesArray,
      currentTurn,
      winTitle,
      systemMove
    );
  }, [movesArray, currentTurn, winTitle, systemMove]);

  function handleSystemMove() {
    let moveIndex;
    do {
      moveIndex = parseInt(Math.random() * 8);
    } while (movesArray[moveIndex] !== "");

    setTimeout(() => {
      makeMove(moveIndex, true);
    }, 500);
  }

  function makeMove(index, isSystemMove = false) {
    movesArray[index] = currentTurn;
    elementsRef.current[index].innerHTML = currentTurn;
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setMovesArray([...movesArray]);

    let winnerTurn = checkWinner();
    if (winnerTurn) {
      let winner1Text = multiplayer
        ? `Winner is ${playerX || "Player X"}`
        : "You won the game";
      let winner2Text = multiplayer
        ? `Winner is ${playerO || "Player O"}`
        : "System won the game";
      setWinTitle(winnerTurn === "X" ? winner1Text : winner2Text);
    } else {
      if (checkDraw()) {
        setWinTitle("Match drawn..!");
      } else {
        if (!multiplayer) {
          setSystemMove(true);
        }
      }
    }
    if (isSystemMove) {
      setSystemMove(false);
    }
  }

  function handleClick(index) {
    if (movesArray[index] === "" && !systemMove && !winTitle) {
      makeMove(index);
    }
  }

  function checkDraw() {
    let emptyMoves = movesArray.filter((ele) => ele === "");
    return emptyMoves.length === 0;
  }

  function checkWinner() {
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
        movesArray[filled[i][0]] === movesArray[filled[i][1]] &&
        movesArray[filled[i][0]] === movesArray[filled[i][2]]
      ) {
        return movesArray[filled[i][0]];
      }
    }
  }

  function playAgain() {
    let collection = document.getElementsByClassName("box");
    for (let i = 0; i < collection.length; i++) {
      collection[i].innerHTML = "";
    }
    setWinTitle("");
    setMovesArray(Array(9).fill(""));
    setCurrentTurn("X");
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          filter: winTitle === "" ? "blur(0px)" : "blur(2px)",
        }}
      >
        <div className="game-container">
          <h1 className="gameHeading">TIC TIC TOE</h1>
          <div className="gameBoard">
            {movesArray.map((_, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (elementsRef.current[index] = el)}
                  className="box"
                  onClick={() => {
                    handleClick(index);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      {winTitle === "" ? (
        <></>
      ) : (
        <WinnerAnnounce
          winTitle={winTitle}
          playAgain={playAgain}
          goBack={goBack}
        />
      )}
    </>
  );
}
