console.log("main js werkt");

const list = document.querySelector("ul")
fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
.then((response) => response.json())
.then((data) => {
    console.log("Data: ", data);
    const pokemons = data.results;
   
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        list.innerHTML += `<li>${pokemon.name}</li>`;
    }
});


fetch("https://dummyjson.com/product")
.then((response) => response.json())
.then((data) => {
    console.log("Data: ", data);
});