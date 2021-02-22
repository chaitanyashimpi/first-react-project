import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     bread: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     bread: "Cocktatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     bread: "Mixed",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" bread="Havanese" />
      <Pet name="Pepper" animal="Bird" bread="Cockatiel" />
      <Pet name="Doink" animal="Cat" bread="Mixed" />
    </div>
  )
};
render(
  <App />, 
  document.getElementById("root")
  );






// Your code is going to go here
// throw new Error('lol');