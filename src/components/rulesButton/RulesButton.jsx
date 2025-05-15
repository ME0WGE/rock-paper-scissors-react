import "./rulesButton.css";
import { useState } from "react";
import RulesModal from "../rulesModal/RulesModal";

export default function RulesButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="rules-container" onClick={() => setShowModal(true)}>
        {showModal && (
          <RulesModal
            onClose={(e) => {
              e.stopPropagation();
              setShowModal(false);
            }}
          />
        )}
        <p>RULES</p>
      </div>
    </>
  );
}
