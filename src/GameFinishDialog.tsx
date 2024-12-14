import ReactDOM from "react-dom";
import "./App.css";

export interface GameFinishDialogProps {
  open: boolean;
  onClose: () => void;
  score?: number;
}

function GameFinishDialog({ open, onClose, score = 0 }: GameFinishDialogProps) {
  return ReactDOM.createPortal(
    open ? (
      <div className="dialog">
        <div className="game-finish-dialog">
          <div className="game-finish-title">게임 종료</div>
          <div className="game-finish-body">
            <div className="score">{score}점</div>
            <div className="impeachment">{`윤석열\n탄핵!`}</div>
          </div>
          <div className="game-finish-action">
            <button onClick={onClose}>다시 도전하기</button>
          </div>
        </div>
      </div>
    ) : null,
    document.body
  );
}

export default GameFinishDialog;
