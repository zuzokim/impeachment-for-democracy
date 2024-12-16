import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import "./App.css";
import Constitution from "./Constitution";
import TitleWithMatchedBurden from "./TitleWithMatchedBurden";
import TimeCount from "./TimeCount";
import Score from "./Score";
import { burdens } from "./burdens";
import screamVoice from "./assets/People_Voices_HumanScream.mp3";
import FallingBurden from "./FallingBurden";

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
    const audio = new Audio(screamVoice);
    if (burdens.includes(matchedText)) {
      setScore((prevScore) => prevScore + 10);
      audio.play();
    }
  }, [matchedText]);

  const [fallingTexts, setFallingTexts] = useState<string[]>(burdens);

  useEffect(() => {
    if (matchedText) {
      setFallingTexts((prevTexts) =>
        prevTexts.filter((text) => text !== matchedText)
      );
    }
  }, [matchedText]);

  return (
    <>
      <Analytics />
      <div className="falling-burdens-container">
        {fallingTexts.map((text) => {
          return <FallingBurden text={text} key={text} />;
        })}
      </div>
      <div className="header">
        <TimeCount score={score} />
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
    </>
  );
}

export default App;
