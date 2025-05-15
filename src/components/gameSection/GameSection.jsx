import GameCard from "../gameCard/GameCard";
import "./gameSection.css";
import data from "../../data/data.json";

export default function GameSection() {
  return (
    <>
      <div className="gamesection-container">
        {data.map((card, index) => (
          <GameCard
            key={index}
            title={card.title}
            imageSrc={card.img}
            borderColor={card.borderColor}
          />
        ))}
      </div>
    </>
  );
}
