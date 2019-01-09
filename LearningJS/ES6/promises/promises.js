/* An example of the usage of promises using ES6 syntax
 * for API calls.
 *
 * This program should pop up a table of pokemon related
 * gifs!
 */
//

// API section for the list of pokemon
api = "https://pokeapi.co/api/v2/pokemon/"

// Function to get the url for the ith pokemon
let make_url = numb => api + numb + "/"
let getPokemonName = (data) => console.log(data.species.name);
function setup() {
    const numb_pokemons = 10;

    pokemonNamesES8(numb_pokemons);
    // pokemonNamesES6(numb_pokemons);
}

// Example with ES8 syntax
async function pokemonNamesES8(numb_pokemons) {
    var pokemons = Array(numb_pokemons);

    // Assign a random value for each element
    // Note there are probably only 100 or so original pokemon
    // so assigning values out of this range will yield an error!
    pokemons = pokemons.fill(0).map(x => Math.floor(random(0, 1000)));
    console.log(pokemons)
    for (let pokemon of pokemons) {
        let url = make_url(pokemon);
        console.log("Fetching pokedex entry " + pokemon + " at " + url);

        let response = await fetch(url);
        let data = await response.json();

        getPokemonName(data);

        // Demonstration of making a promise compatible function
        delayES8(5000);
    }
}

// Example with ES6 syntax
function pokemonNamesES6(numb_pokemons) {
    var pokemons = Array(numb_pokemons);

    // Assign a random value for each element
    // Note there are probably only 100 or so original pokemon
    // so assigning values out of this range will yield an error!
    pokemons = pokemons.fill(0).map(x => Math.floor(random(0, 1000)));
    console.log(pokemons)
    for (let pokemon of pokemons) {
        let url = make_url(pokemon);
        console.log("Fetching pokedex entry " + pokemon + " at " + url);

        fetch(url)
        .then(response => response.json())
        .then(data => getPokemonName(data))
        .catch(err => console.log(err));

        // Demonstration of making a promise compatible function
        delayES6(1000);
    }
}


// Example of ES8 syntax for a promise compatible delay function
async function delayES8(time) {
    await delayES6(time);

    return;
}

// Example of ES6 syntax for a promise compatible delay function
function delayES6(time) {
    return new Promise((resolve, reject) => {
        if (isNaN(time))
        {
            reject(new Error("time must be a number!"));
        }
        else {
            // Waits a given amount of time and then calls callback function
            setTimeout(resolve, time);
        }
    })
}

