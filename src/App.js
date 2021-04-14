import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const notes = ["A", "B", "C", "D", "E", "F", "G"];
  const chords = notes.flatMap((x) => {
    return [x, x + "m", x + "#", x + "#m"];
  });
  const [chord, setChord] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setChord(chords[Math.floor(Math.random() * chords.length)]);
    }, 5000);
  }, [chord]);

  return (
    <div className="App">
      <header className="App-header">
        <div>{chord}</div>
      </header>
    </div>
  );
}

export default App;
