import './App.css';
import React from "react";
import Dinner from "./dinner"
function App() {
  return (
    <div className="App">
      <Dinner dish="biryani" sweet="kheer" />
      <Dinner dish="chawal" sweet="fish ka halwa" />
      <Dinner dish="pali" sweet="kajoor ka juice" />
      <Dinner dish="saag" sweet="ice cream" />
    </div>
  );
}

export default App;
