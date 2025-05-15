import "./headerLogo.css";

export default function HeaderLogo({ imageSrc, title }) {
  const imageSource = new URL(
    `../../assets/images/${imageSrc}`,
    import.meta.url
  ).href;
  const altText = `image of ${title}`;
  return (
    <>
      <img src={imageSource} alt={altText} className="logo-img" />
    </>
  );
}
