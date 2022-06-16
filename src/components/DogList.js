import React from "react";
import Dog from "./Dog";

export const DogList = ({ dogs }) => {
  return (
    <ul>
      <h2>Pup Count: 3</h2>
      {dogs.map((dog) => {
        return <Dog name={dog.name} chipNum={dog.chipNumber} />;
      })}
    </ul>
  );
};
