import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const notes = ["A", "B", "C", "D", "E", "F", "G"];
  const chords = notes.flatMap((x) => {
    return [x, x + "m", x + "#", x + "#m"];
  });

  const [chord, setChord] = useState("");
  const [color, setColor] = useState("black");

  useEffect(() => {
    setTimeout(() => {
      setChord(chords[Math.floor(Math.random() * chords.length)]);
      setColor(
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`
      );
    }, 8000);
  }, [chord]);

  const style = {
    backgroundColor: color,
  };

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <div className="chord">{chord}</div>
        <div className="regular">Switch chords when the color changes!</div>
      </header>
    </div>
  );
}

export default App;
