import "./App.css";
import GameHeader from "./components/gameHeader/GameHeader";
import GameRules from "./components/gameRules/GameRules";
import GameSection from "./components/gameSection/GameSection";

function App() {
  return (
    <>
      <GameHeader />
      <GameSection />
      <GameRules />
    </>
  );
}

export default App;
