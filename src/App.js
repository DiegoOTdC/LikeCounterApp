import React from "react";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <main>
      <Title content="My first button in React!" />
      <p>Ya like?</p>
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
    </main>
  );
}

export default App;
