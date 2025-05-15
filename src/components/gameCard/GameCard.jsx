import "./gameCard.css";

export default function GameCard({ title, imageSrc, borderColor }) {
  const imageSource = new URL(
    `../../assets/images/${imageSrc}`,
    import.meta.url
  ).href;
  const altText = `image of ${title}`;
  return (
    <>
      <div
        className="card"
        style={{ background: `linear-gradient(${borderColor})` }}
      >
        <img src={imageSource} alt={altText} className="card-img" />
      </div>
    </>
  );
}
