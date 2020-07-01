// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import Timeout, { set } from "await-timeout";

export default function ArticleList() {
  const [articles, set_articles] = useState();

  //  useEffect(() => {
  //    async function doSomeDataFetching() {
  //      await Timeout.set(2000);
  //      const response = await axios.get(
  //        "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //      );
  //
  //      const { data } = response;
  //
  //      set_articles(data);
  //    }
  //    doSomeDataFetching();
  //  }, []);

  async function doSomeDataFetching() {
    await Timeout.set(2000);
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";
    const response = await axios.get(url);
    const { data } = response;
    set_articles(data);
  }

  function effect() {
    doSomeDataFetching();
  }

  useEffect(effect, []);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={() => set_articles([])}>Clear notifications</button>
      {articles
        ? articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              content={article.body}
            />
          ))
        : "Loading...."}
    </div>
  );
}
