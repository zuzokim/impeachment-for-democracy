import "./App.css";

export interface TitleWithMatchedBurdenProps {
  matchedText?: string;
}

function TitleWithMatchedBurden({ matchedText }: TitleWithMatchedBurdenProps) {
  return (
    <div className="title-with-matched-name">
      <span className="title">{`105 + 1 `}</span>
      <span className="matched-text">
        {matchedText}
        {matchedText ? `!!` : `탄핵 타자 연습`}
      </span>
    </div>
  );
}

export default TitleWithMatchedBurden;
