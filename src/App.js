import React from "react";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Title content="My first button in React!" />
      <p>Ya like?</p>
      <LikeCounter />
    </main>
  );
}

export default App;
