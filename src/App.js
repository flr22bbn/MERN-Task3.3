import "./App.css";

import { useState } from "react";

function App() {
  const [currColor, setCurrColor] = useState("lightpink");

  const [display, setDisplay] = useState("lightpink");

  const updateColor = (col) => {
    setCurrColor(col)
    setDisplay(!display)
  }

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className='container' style={{ backgroundColor: currColor }}>
        {display && (
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => updateColor("red")}
            ></button>
            <button
              style={{ backgroundColor: "Chartreuse" }}
              onClick={() => updateColor("Chartreuse")}
            ></button>
            <button
              style={{ backgroundColor: "blue" }}
              onClick={() => updateColor("blue")}
            ></button>

            <button
              style={{ backgroundColor: "purple" }}
              onClick={() => updateColor("purple")}
            ></button>
            <button
              style={{ backgroundColor: "lightpink" }}
              onClick={() => updateColor("lightpink")}
            ></button>
            <button
              style={{ backgroundColor: "DarkOrange" }}
              onClick={() => updateColor("DarkOrange")}
            ></button>
            <button
              style={{ backgroundColor: "CornflowerBlue" }}
              onClick={() => updateColor("CornflowerBlue")}
            ></button>
            <button
              style={{ backgroundColor: "gold" }}
              onClick={() => updateColor("gold")}
            ></button>
          </div>
        )}
        <div>
          <button
            style={{ width: 200 }}
            onClick={() => {
              setDisplay(!display);
            }}
          >
            Pick a color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;