import "./gameCard.css";

export default function GameCard({ title, imageSrc, borderColor }) {
  const imageSource = new URL(
    `../../assets/images/${imageSrc}`,
    import.meta.url
  ).href;
  const altText = `image of ${title}`;

  function handleClick(e) {
    e.target.classList.contains("Paper")
      ? console.log("paper")
      : console.log("autre");
  }
  return (
    <>
      <div
        className="card"
        style={{ background: `linear-gradient(${borderColor})` }}
        onClick={handleClick}
      >
        <img src={imageSource} alt={altText} className={`card-img ${title}`} />
      </div>
    </>
  );
}
