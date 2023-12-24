export default function WinnerAnnounce({ winTitle, playAgain, goBack }) {
  return (
    <div className="winnerScreen">
      <h2>{winTitle}</h2>
      <div className="Buttons">
        <button
          onClick={() => {
            goBack?.();
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            playAgain?.();
          }}
        >
          play Again
        </button>
      </div>
    </div>
  );
}
