import { useEffect, useState } from "react";
import "./App.css";
import FallingBurdens from "./FallingBurdens";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [matchedText, setMatchedText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    console.log(event.target.value, "baue");
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

  return (
    <>
      <FallingBurdens matchedText={matchedText} />
      <div className="inputWrapper">
        <div>
          <div className="matchedName">
            {`105 + 1 `}
            {matchedText}
            {matchedText ? `!!` : `탄핵 타자 연습`}
          </div>
          <div className="constitution">
            {`대한민국 헌법 | 제1조 ①대한민국은 민주공화국이다. ②대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.
제46조 ①국회의원은 청렴의 의무가 있다. ②국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. ③국회의원은 그 지위를 남용하여 국가ㆍ공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리ㆍ이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.`}
          </div>
        </div>
        <input
          autoFocus
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="탄핵 타자 연습 - 입력후 엔터"
        />
      </div>
    </>
  );
}

export default App;
