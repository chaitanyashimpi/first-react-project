import React from 'react';

export default function Pet  ({ name, animal, bread }) {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, bread),
  // ]);
  return(
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{bread}</h2>
    </div>
  )
};

