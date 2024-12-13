import "./App.css";

export interface ScoreProps {
  score?: number;
}

function Score({ score = 0 }: ScoreProps) {
  return <div className="score">{score}점</div>;
}

export default Score;
