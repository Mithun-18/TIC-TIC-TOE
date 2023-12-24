export default function SelectMode({ onSelect }) {
  return (
    <div className="playerContainer">
      <div className="player-selectmode">
        <button
          onClick={() => {
            onSelect?.(true);
          }}
        >
          MultiPlayer
        </button>
        <button
          onClick={() => {
            onSelect?.(false);
          }}
        >
          With System
        </button>
      </div>
    </div>
  );
}
