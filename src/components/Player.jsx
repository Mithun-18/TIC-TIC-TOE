import GameBoard from "./GameBoard";

export default function Player({showgame}){
    return(
        <div className="playerContainer">
            <div className="player">
                <input type="text" placeholder="Player 'X'"/>
                <input type="text" placeholder="Player 'O'"/>
                <button onClick={showgame}>play</button>
            </div>
        </div>
    );
}