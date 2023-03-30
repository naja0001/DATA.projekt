"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemon(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );

  //for of loop pokemon et object af pokemons array'et
  for (const pokemon of pokemons) {
    showpokemon(pokemon);
    console.log(pokemon);
  }

  //eller pokemon.forEach(showpokemon)
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

function showpokemon(pokemons) {
  console.log(pokemons);

  const myPokemons = /* html */ `
  
    <article class="grid-item">
        <h2>${
          pokemons.name[0].toUpperCase() + pokemons.name.slice(1).toLowerCase()
        }</h2>
        <img src = "${pokemons.image}" alt=""/>
        <h4>Type: ${
          pokemons.type[0].toUpperCase() + pokemons.type.slice(1).toLowerCase()
        }</h4>
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
    document.querySelector("#detail-info").textContent = pokemons.name;
    document.querySelector("#detail-description").textContent =
      pokemons.description;
    document.querySelector("#detail-ability").textContent = pokemons.ability;
    document.querySelector("#detail-dexindex").textContent = pokemons.dexindex;
    document.querySelector("#detail-subtype").textContent = pokemons.subtype;
    document.querySelector("#detail-generation").textContent =
      pokemons.generation;
    document.querySelector("#detail-height").textContent = pokemons.height;
    document.querySelector("#detail-weight").textContent = pokemons.weight;
    document.querySelector("#detail-gender").textContent = pokemons.gender;
    document.querySelector("#detail-type").textContent = pokemons.type;
    document.querySelector("#detail-weaknesses").textContent =
      pokemons.weaknesses;
    document.querySelector("#detail-spilversion").textContent =
      pokemons.spilversion;
    document.querySelector("#detail-statsHP").textContent = pokemons.statsHP;
    document.querySelector("#detail-statsattack").textContent =
      pokemons.statsAttack;
    document.querySelector("#detail-statsDefense").textContent =
      pokemons.statsDefence;
    document.querySelector("#detail-statsSpecialAttack").textContent =
      pokemons.statsSpecialAttack;
    document.querySelector("#detail-statsSpecialDefense").textContent =
      pokemons.statsSpecialDefence;

    let canEvolve = generateEvolve(pokemons);

    document.querySelector("#detail-canEvolve").textContent = canEvolve;

    document.querySelector("#dialog-character").showModal();
  }
}

function generateEvolve(pokemons) {
  let canEvolve = "";
  if (pokemons.canEvolve) {
    canEvolve = `${pokemons.name} can evolve.`;
  } else {
    canEvolve = `${pokemons.name} can't evolve.`;
  }
  return canEvolve;
}
