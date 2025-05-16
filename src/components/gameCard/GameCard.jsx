import "./gameCard.css";

export default function GameCard({
  title,
  imageSrc,
  borderColor,
  onCardClick,
}) {
  const imageSource = new URL(
    `../../assets/images/${imageSrc}`,
    import.meta.url
  ).href;
  const altText = `image of ${title}`;

  function handleClick() {
    onCardClick(title);
  }

  return (
    <>
      <div
        className="card"
        // style={{ background: `linear-gradient(${borderColor})` }}
        style={{ border: `15px solid ${borderColor}` }}
        onClick={handleClick}
      >
        <img src={imageSource} alt={altText} className={`card-img ${title}`} />
      </div>
    </>
  );
}
