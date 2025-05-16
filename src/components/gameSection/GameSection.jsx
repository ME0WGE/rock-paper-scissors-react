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

  // Quand le score local change, mettre à jour le score global
  useEffect(() => {
    if (updateScore) {
      updateScore(localScore);
    }
  }, [localScore, updateScore]);

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "DRAW";
    }

    if (
      // Vérifie si le joueur a gagné
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      return "YOU WIN";
    }
    // Le joueur a perdu
    return "YOU LOSE";
  };

  const handleUserChoice = (choice) => {
    // Choisir aléatoirement pour l'ordinateur
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);

    // Déterminer le résultat
    const gameResult = determineWinner(choice, computerRandomChoice);
    setResult(gameResult);

    if (gameResult === "YOU WIN") {
      // Mettre à jour le score quand le joueur a gagné
      setLocalScore((prevScore) => prevScore + 1);
    }
    if (gameResult === "YOU LOSE") {
      // Mettre à jour le score quand le joueur a perdu
      setLocalScore((prevScore) => prevScore - 1);
    }

    // Afficher l'écran de résultat
    setShowResult(true);
  };

  const playAgain = () => {
    // Réinitialiser les valeurs par défaut
    setShowResult(false);
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <>
      {!showResult ? (
        <div className="gamesection-container">
          {data.map((card, index) => (
            <GameCard
              key={index}
              title={card.title}
              imageSrc={card.img}
              borderColor={card.borderColor}
              onCardClick={handleUserChoice}
            />
          ))}
        </div>
      ) : (
        <div className="result-screen">
          <div className="choices-container">
            <div className="choice-column">
              <div className="choice-label">YOU PICKED</div>
              <div className={`choice-circle ${userChoice.toLowerCase()}`}>
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
              <div className={`choice-circle ${computerChoice.toLowerCase()}`}>
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
