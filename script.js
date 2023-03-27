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
        <img src = "${pokemons.image}" alt=""/>
        <h4>Number: ${pokemons.number}</h4>
        <h4> Type: ${pokemons.type}</h4>
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

    document.querySelector("#detail-image").src = pokemons.image;
    document.querySelector("#detail-name").textContent = pokemons.name;
    document.querySelector(
      "#detail-number"
    ).textContent = `Number: ${pokemons.number}`;
    document.querySelector(
      "#detail-category"
    ).textContent = `Category: ${pokemons.category}`;
    document.querySelector(
      "#detail-ability"
    ).textContent = `Ability: ${pokemons.ability}`;
    document.querySelector(
      "#detail-dexindex"
    ).textContent = `Dexindex: ${pokemons.dexindex}`;
    document.querySelector(
      "#detail-subtype"
    ).textContent = `Subtype: ${pokemons.subtype}`;
    document.querySelector(
      "#detail-generation"
    ).textContent = `Generation: ${pokemons.generation}`;
    document.querySelector(
      "#detail-height"
    ).textContent = `Height: ${pokemons.height} cm`;
    document.querySelector(
      "#detail-weight"
    ).textContent = `Weight: ${pokemons.weight} kg`;
    document.querySelector(
      "#detail-gender"
    ).textContent = `Gender: ${pokemons.gender}`;
    document.querySelector(
      "#detail-type"
    ).textContent = `Type: ${pokemons.type}`;
    document.querySelector(
      "#detail-weaknesses"
    ).textContent = `Weaknesses: ${pokemons.weakneses}`;
    document.querySelector(
      "#detail-spilversion"
    ).textContent = `Spilversion: ${pokemons.spilversion}`;
    document.querySelector(
      "#detail-canEvolve"
    ).textContent = `canEvovle: ${pokemons.canEvolve}`;
    document.querySelector(
      "#detail-statsHP"
    ).textContent = `statsHP: ${pokemons.statsHP}`;
    document.querySelector(
      "#detail-statsattack"
    ).textContent = `statsattack: ${pokemons.statsattack}`;
    document.querySelector(
      "#detail-statsDefense"
    ).textContent = `statsDefense: ${pokemons.statsDefense}`;
    document.querySelector(
      "#detail-statsSpecielAttack"
    ).textContent = `statsSpecielAttack: ${pokemons.statsSpecielAttack}`;
    document.querySelector(
      "#detail-statsSpecielDefense"
    ).textContent = `statsSpecielDefense: ${pokemons.statsSpecielDefense}`;

    document.querySelector("#dialog").showModal();
  }
}
