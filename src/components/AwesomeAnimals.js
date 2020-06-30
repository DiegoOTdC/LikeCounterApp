import React from "react";

const animals = [
  "Chicken",
  "Sloth",
  "Porcupine",
  "Killer Whale",
  "Velociraptor",
];

export default function AwesomeAnimals() {
  return (
    <ul>
      {animals.map((animal, index) => {
        return (
          <li>
            Awesomeness level {index + 1}: {animal}
          </li>
        );
      })}
    </ul>
  );
}
