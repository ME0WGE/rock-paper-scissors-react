import { useState } from "react";
import "./App.css";
import GameHeader from "./components/gameHeader/GameHeader";
import GameRules from "./components/gameRules/GameRules";
import GameSection from "./components/gameSection/GameSection";
import RulesModal from "./components/rulesModal/RulesModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <GameHeader />
      <GameSection />
      <GameRules />

      <div>
        <button onClick={() => setShowModal(true)}>Rules</button>
        {showModal && <RulesModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default App;
