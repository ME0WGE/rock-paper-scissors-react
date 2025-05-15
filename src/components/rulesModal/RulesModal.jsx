import "./rulesModal.css";

export default function RulesModal({ onClose }) {
  const imageSource = new URL(
    `../../assets/images/image-rules.svg`,
    import.meta.url
  ).href;
  const altText = `image of rules`;
  return (
    <div className="modal-overlay">
      <div className="modal-box">
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
