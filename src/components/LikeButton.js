import React, { useState } from "react"; // <- note the added import of useState

export default function LikeButton() {
  const [answer, setAnswer] = useState("Like this");

  const newAnswer =
    answer === "Like this" ? "You've liked this. Click to unlike" : "Like this";

  const [numLike, setLike] = useState("no"); // <- using state!

  const newLike = numLike === "no" ? "yes" : "no";

  return (
    <div>
      <p>
        Do you like this? <b>{numLike}</b>
        <br></br>
        <button
          onClick={() => {
            setAnswer(newAnswer);
            setLike(newLike);
          }}
        >
          {answer}
        </button>
      </p>
    </div>
  );
}
