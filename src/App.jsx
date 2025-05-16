import { useState } from "react";
import "./App.css";
import GameHeader from "./components/gameHeader/GameHeader";
import GameRules from "./components/gameRules/GameRules";
import GameSection from "./components/gameSection/GameSection";

function App() {
  const [score, setScore] = useState(0);

  const updateScore = (newScore) => {
    setScore(newScore);
  };
  return (
    <>
      <GameHeader score={score} />
      <GameSection updateScore={updateScore} />
      <GameRules />
    </>
  );
}

export default App;
