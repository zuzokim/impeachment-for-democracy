import { useEffect, useState } from "react";
import "./App.css";
import GameFinishDialog from "./GameFinishDialog";
import ConstitutionDialog from "./ConstitutionDialog";

export interface TimeCountProps {
  score?: number;
}

function TimeCount({ score = 0 }: TimeCountProps) {
  const [time, setTime] = useState(60000);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const [openConstitutionDialog, setOpenConstitutionDialog] = useState(true);
  const [openFinishDialog, setOpenFinishDialog] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;
    if (isCountdownActive) {
      timerId = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 100 : 0));
      }, 100);
    }
    return () => clearInterval(timerId);
  }, [isCountdownActive]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const millis = Math.floor((milliseconds % 1000) / 10); // Get the first two digits of milliseconds
    return `${seconds < 10 ? `0${seconds}` : seconds}:${
      millis < 10 ? `0${millis}` : millis
    }`;
  };

  useEffect(() => {
    if (time === 0) {
      setOpenFinishDialog(true);
    }
  }, [time]);

  return (
    <>
      <div className="time-count">{formatTime(time)}</div>
      <ConstitutionDialog
        open={openConstitutionDialog}
        onClose={() => {
          setOpenConstitutionDialog(false);
          setIsCountdownActive(true);
        }}
      />
      <GameFinishDialog
        score={score}
        open={openFinishDialog}
        onClose={() => {
          setOpenFinishDialog(false);
          setTime(60000);
        }}
      />
    </>
  );
}

export default TimeCount;
