import { memo, useEffect, useState } from "react";
import "./App.css";
import { burdens } from "./burdens";

export interface FallingBurdensProps {
  matchedText: string;
}

function FallingBurdens({ matchedText }: FallingBurdensProps) {
  const [fallingTexts, setFallingTexts] = useState<string[]>(burdens);

  useEffect(() => {
    if (matchedText) {
      setFallingTexts((prevTexts) =>
        prevTexts.filter((text) => text !== matchedText)
      );
    }
  }, [matchedText]);

  return (
    <div className="falling-burdens-container">
      {fallingTexts.map((text, index) => {
        return (
          <b
            key={index}
            className="falling-burden"
            style={{
              fontSize: text === "윤석열" ? "106px" : "36px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}px`,
              animationDelay: `${Math.random() * 44}s`,
              animationDuration: `${20 + Math.random() * 10}s`, // Random duration between 40s and 44s
            }}
          >
            {text}
          </b>
        );
      })}
    </div>
  );
}

export default memo(FallingBurdens);
