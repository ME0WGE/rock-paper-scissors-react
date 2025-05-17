import { useState, useEffect } from "react";
import "./gameSection.css";
import GameCard from "../gameCard/GameCard";
import data from "../../data/data.json";

export default function GameSection({ updateScore }) {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [localScore, setLocalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const choices = ["Rock", "Paper", "Scissors"];

  // Responsive state for mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (updateScore) {
      updateScore(localScore);
    }
  }, [localScore, updateScore]);

  const determineWinner = (user, computer) => {
    if (user === computer) return "DRAW";
    if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      return "YOU WIN";
    }
    return "YOU LOSE";
  };

  const handleUserChoice = (choice) => {
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    const gameResult = determineWinner(choice, computerRandomChoice);
    setResult(gameResult);
    if (gameResult === "YOU WIN") setLocalScore((prev) => prev + 1);
    if (gameResult === "YOU LOSE") setLocalScore((prev) => prev - 1);
    setShowResult(true);
  };

  const playAgain = () => {
    setShowResult(false);
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <>
      {!showResult ? (
        <div className="gamesection-container">
          {isMobile ? (
            <div className="choices-container">
              <div
                className="choice-circle paper"
                onClick={() => handleUserChoice("Paper")}
                style={{ borderColor: data[0].borderColor }}
              >
                <img
                  src={new URL(`../../assets/images/${data[0].img}`, import.meta.url).href}
                  alt="Paper"
                />
              </div>
              <div
                className="choice-circle scissors"
                onClick={() => handleUserChoice("Scissors")}
                style={{ borderColor: data[1].borderColor }}
              >
                <img
                  src={new URL(`../../assets/images/${data[1].img}`, import.meta.url).href}
                  alt="Scissors"
                />
              </div>
              <div
                className="choice-circle rock"
                onClick={() => handleUserChoice("Rock")}
                style={{ borderColor: data[2].borderColor }}
              >
                <img
                  src={new URL(`../../assets/images/${data[2].img}`, import.meta.url).href}
                  alt="Rock"
                />
              </div>
            </div>
          ) : (
            data.map((card, index) => (
              <GameCard
                key={index}
                title={card.title}
                imageSrc={card.img}
                borderColor={card.borderColor}
                onCardClick={handleUserChoice}
              />
            ))
          )}
        </div>
      ) : (
        <div className="result-screen">
          <div className="choices-container">
            <div className="choice-column">
              <div className="choice-label">YOU PICKED</div>
              <div className={`choice-circle ${userChoice?.toLowerCase()}`}>
                <img
                  src={
                    new URL(
                      `../../assets/images/${
                        data.find((item) => item.title === userChoice)?.img
                      }`,
                      import.meta.url
                    ).href
                  }
                  alt={userChoice}
                />
              </div>
            </div>

            <div className="result-column">
              <div className="result-text">{result}</div>
              <button className="play-again-btn" onClick={playAgain}>
                PLAY AGAIN
              </button>
            </div>

            <div className="choice-column">
              <div className="choice-label">THE HOUSE PICKED</div>
              <div className={`choice-circle ${computerChoice?.toLowerCase()}`}>
                <img
                  src={
                    new URL(
                      `../../assets/images/${
                        data.find((item) => item.title === computerChoice)?.img
                      }`,
                      import.meta.url
                    ).href
                  }
                  alt={computerChoice}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
