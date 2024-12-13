import { useEffect, useState } from "react";
import "./App.css";
import FallingBurdens from "./FallingBurdens";
import Constitution from "./Constitution";
import TitleWithMatchedBurden from "./TitleWithMatchedBurden";
import TimeCount from "./TimeCount";
import Score from "./Score";
import { burdens } from "./burdens";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [matchedText, setMatchedText] = useState<string>("");
  const [score, setScore] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    // console.log(event.target.value, "baue");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setMatchedText(inputText);
    }
  };

  useEffect(() => {
    if (matchedText) {
      setInputText("");
    }
  }, [matchedText]);

  useEffect(() => {
    if (burdens.includes(matchedText)) {
      setScore((prevScore) => prevScore + 10);
    }
  }, [matchedText]);

  return (
    <div>
      <FallingBurdens matchedText={matchedText} />
      <div className="header">
        <TimeCount />
        <Score score={score} />
      </div>
      <div className="footer">
        <div className="footer-left">
          <Constitution />
          <TitleWithMatchedBurden matchedText={matchedText} />
        </div>

        <input
          autoFocus
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="텍스트를 입력 후 엔터 키를 눌러주세요."
        />
      </div>
    </div>
  );
}

export default App;
