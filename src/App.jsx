import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
function App() {

const [isGameStrated, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  return(
  <>
  {
   isGameStrated ? <GamePlay /> : <StartGame 
   toggle = {toggleGamePlay}
   />
  }
  </>
);}
export default App;