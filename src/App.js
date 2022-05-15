import { useEffect, useState } from "react";
import "./App.sass";
import Starship from "./components/Starship";

export default function App() {
  const [starship, setStarship] = useState(null);

  const getStarships = async (currentPage) => {
    try {
      console.log("Fetching Data");
      const response = await fetch(currentPage);
      const data = await response.json();
      setStarship(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStarships("https://swapi.dev/api/starships/");
  }, []);

  return (
    <div className="App">
      <nav>STAR WARS STARSHIPS</nav>
      <div className="btns">
        <button
          onClick={() => {
            if (!starship.previous) return;
            getStarships(starship.previous);
          }}>
          Previous
        </button>
        <button
          onClick={() => {
            if (!starship.next) return;
            getStarships(starship.next);
          }}>
          Next
        </button>
      </div>
      <div className="display-area">
        {starship &&
          starship.results.map((ele, idx) => (
            <Starship
              name={ele.name}
              model={ele.model}
              manufacturer={ele.manufacturer}
              passengers={ele.passengers}
              key={idx}
            />
          ))}
      </div>
    </div>
  );
}
