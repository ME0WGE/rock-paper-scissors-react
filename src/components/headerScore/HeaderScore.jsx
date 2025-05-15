import "./headerScore.css";

export default function HeaderScore({ score }) {
  return (
    <>
      <div className="score-container">
        <p className="p-score">SCORE</p>
        <span className="span-score">{score}</span>
      </div>
    </>
  );
}
