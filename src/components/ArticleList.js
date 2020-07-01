// src/components/ArticleList.js
import React, { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  function newState() {
    set_articles([
      { id: 1, title: "", body: "" },
      { id: 2, title: "", body: "" },
      { id: 3, title: "", body: "" },
    ]);
  }
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={newState}>Clear notifications</button>
      {articles.map((article) => {
        return (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        );
      })}
    </div>
  );
}
