// Your code is going to go here
// throw new Error('lol');

const Pet = ({ name, animal, bread }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, bread),
  ]);
};

const App = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      bread: "Cocktatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      bread: "Mixed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
