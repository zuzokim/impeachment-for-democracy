import { useState } from "react";
import "./App.css";
import ConstitutionButton from "./ConstitutionButton";
import ConstitutionDialog from "./ConstitutionDialog";

function Constitution() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ConstitutionButton
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      <ConstitutionDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default Constitution;
