import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
