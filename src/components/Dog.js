import React from "react";

const Dog = ({ name, chipNum }) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Chip #: {chipNum}</span>
      <button>add a good lil pupper</button>
    </li>
  );
};

export default Dog;
