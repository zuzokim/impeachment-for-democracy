import { useMemo } from "react";
import "./App.css";

export interface FallingBurdensProps {
  text: string;
}

function FallingBurden({ text }: FallingBurdensProps) {
  const initialStyles = useMemo(() => {
    return {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -100}px`,
      animationDelay: `${Math.random() * 44}s`,
      animationDuration: `${20 + Math.random() * 10}s`, // Random duration between 40s and 44s
    };
  }, []);

  return (
    <b
      id={text === "윤석열" ? "yoon" : ""}
      className="falling-burden"
      style={initialStyles}
    >
      {text}
    </b>
  );
}

export default FallingBurden;
