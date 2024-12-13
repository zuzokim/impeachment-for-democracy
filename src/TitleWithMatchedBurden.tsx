import "./App.css";

export interface TitleWithMatchedBurdenProps {
  matchedText?: string;
}

function TitleWithMatchedBurden({ matchedText }: TitleWithMatchedBurdenProps) {
  return (
    <div className="title-with-matched-name">
      <span>{`105 + 1 `}</span>
      {matchedText}
      {matchedText ? `!!` : `탄핵 타자 연습`}
    </div>
  );
}

export default TitleWithMatchedBurden;
