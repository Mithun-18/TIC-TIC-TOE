export default function WinnerAnnounce({ winnerName ,reload}) {
  return (
    <div className="winnerScreen">
      <h2>{winnerName}</h2>
      <div className="Buttons">
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Back
        </button>
        <button onClick={()=>{
            reload();
        }}>play Again</button>
      </div>
    </div>
  );
}
