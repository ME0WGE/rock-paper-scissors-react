import "./rulesModal.css";

export default function RulesModal({ onClose }) {
  const imageSource = new URL(
    `../../assets/images/image-rules.svg`,
    import.meta.url
  ).href;
  const altText = `image of rules`;

  const handleOverlayClick = (e) => {
    // Fermer le modal si click en dehors du modal
    if (e.target.classList.contains("modal-overlay")) {
      onClose(e);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Rules</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-content">
          <img src={imageSource} alt={altText} className="logo-img" />
        </div>
      </div>
    </div>
  );
}
