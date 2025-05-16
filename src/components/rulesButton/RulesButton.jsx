import "./rulesButton.css";
import { useState } from "react";
import RulesModal from "../rulesModal/RulesModal";

export default function RulesButton() {
  const [showModal, setShowModal] = useState(false);

  // Ouvrir le modal
  const handleOpenModal = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  // Fermer le modal
  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <>
      <div className="rules-container" onClick={handleOpenModal}>
        <p>RULES</p>
        {showModal && <RulesModal onClose={handleCloseModal} />}
      </div>
    </>
  );
}
