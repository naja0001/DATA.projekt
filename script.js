"use strict";

const wartortle = {
  discription:
    "Wartortle is a Water Pokémon which evolves from Squirtle. It is vulnerable to Grass and Electric moves. Wartortle's strongest moveset is Water Gun",
  name: "Wartortle ",
  number: "#0008",
  height: "3'03",
  weight: "49.6 ibs",
  category: "Turtle",
  gender: " Male and Female ",
  type: "water",
  weaknesses: "Grass and electric",
};

console.log(wartortle);

function addPokemon(pokemons) {
  const myPokemons = /* html */ `
<li> <b> Disccription</b>: <br> ${pokemons.discription}</li>
  <br><li> <b>Name</b>: ${pokemons.name}</li>
  <li> <b>Number</b>: ${pokemons.number} </li>
  <li> <b>Height</b>: ${pokemons.height} </li>
  <li> <b>Weight</b>: ${pokemons.weight} </li>
  <li> <b>Category</b>: ${pokemons.category} </li>
  <li> <b>Gender</b>: ${pokemons.gender} </li>
  <li> <b>Type</b>: ${pokemons.type} </li>
  <li> <b>Weaknesses</b>: ${pokemons.weaknesses} </li>
  
`;

  document
    .querySelector("#pokemons")
    .insertAdjacentHTML("beforeend", myPokemons);
}

addPokemon(wartortle);
