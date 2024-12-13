import "./App.css";

export interface ConstitutionButtonProps {
  onClick: () => void;
}

function ConstitutionButton({ onClick }: ConstitutionButtonProps) {


  return (
    <button className="constitution-button" onClick={onClick}>
      대한민국 헌법
    </button>
  );
}

export default ConstitutionButton;
