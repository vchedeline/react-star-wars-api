import { useEffect, useState } from "react";
import "./App.css";
import Starship from "./components/Starship";

export default function App() {
  const [starship, setStarship] = useState([]);

  const getStarships = async () => {
    const response = await fetch("https://swapi.dev/api/starships/");
    const data = await response.json();
    setStarship(data.results)
  };

  useEffect(() => {getStarships()}, []);
  
  let allShips = starship.map((ele, idx) => {
    return (
      <Starship name={ele.name} key={idx} />
    )
  })
  return (
    <div className="App">
      <nav>STAR WARS STARSHIPS</nav>
      {allShips}
    </div>
  );
}
