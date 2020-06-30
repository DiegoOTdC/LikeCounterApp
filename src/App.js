import React from "react";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <main>
      <Title content="My first button in React!" />
      <p>Ya like?</p>
      <LikeCounter />
      <LikeButton />
    </main>
  );
}

export default App;
