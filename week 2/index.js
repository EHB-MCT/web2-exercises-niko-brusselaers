"use strict"
import team from "./team.js"
let list = [];
let pokemon = [];

function getData() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            list = data.results;
            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(data => {
                        pokemon.push(data);
                    })
            });
        })

}
window.onload = function () {
    getData();

    setTimeout(buildList, 5000);

    function buildList() {
        let innerhtml = ""

        pokemon.forEach(pokemon => {
            console.log(pokemon.name);
            innerhtml += `
                <div class="pokemon">
                    <img class="img" src="https://pokeapi.co/api/v2/pokemon/2/" alt="">
                    <p class="nr"></p>
                    <h1 class="${pokemon.name}">ivysaur</h1>
                    <div><p></p> <p></p></div>
                </div>
                `

        })

    }
}