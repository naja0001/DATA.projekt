"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const wartortle = await getPokemon("data/pokemon.JSON");
  showpokemon(wartortle);
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

function showpokemon(pokemons) {
  console.log(pokemons);

  const myPokemons = /* html */ `
  <!--
<li> <b> Disccription</b>: <br> ${pokemons.discription}</li>
  <br><li> <b>Name</b>: ${pokemons.name}</li>
  <li> <b>Number</b>: ${pokemons.number} </li>
  <li> <b>Height</b>: ${pokemons.height} </li>
  <li> <b>Weight</b>: ${pokemons.weight} </li>
  <li> <b>Category</b>: ${pokemons.category} </li>
  <li> <b>Gender</b>: ${pokemons.gender} </li>
  <li> <b>Type</b>: ${pokemons.type} </li>
  <li> <b>Weaknesses</b>: ${pokemons.weaknesses} </li>-->
  
    <article class="grid-item">
        <h2>${pokemons.name}</h2>
        <p>${pokemons.number}</p>
        <p> ${pokemons.type}</p>
        <img src = "${pokemons.image}" alt=""/>
    </article>

`;

  document
    .querySelector("#pokemon-character")
    .insertAdjacentHTML("beforeend", myPokemons);
  document
    .querySelector("#pokemon-character article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log("______________________________________");

    document.querySelector("#detail-name").textContent = pokemons.name;
    document.querySelector("#detail-number").textContent = pokemons.number;
    document.querySelector("#detail-category").textContent = pokemons.category;
    document.querySelector("#detail-image").src = pokemons.image;

    document.querySelector("#dialog").showModal();
  }
}
