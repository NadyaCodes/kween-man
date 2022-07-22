export default function PlayAgain() {
  return (
    <div>
      <button onClick={() => window.location.reload()} className="playAgain">
        Play Again
      </button>
    </div>
  );
}
