
export default function SelectMode({multimode,systemmode}) {
    return (
      <div className="playerContainer">
        <div className="player-selectmode">
            <button onClick={multimode}>MultiPlayer</button>
            <button onClick={systemmode}>With System</button>
        </div>
      </div>
    );
  }
  