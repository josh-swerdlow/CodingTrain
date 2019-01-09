

var population;
var target;
function setup() {
    // Create a random seed for retesting purposes
    randomSeed(10);

    // Parameters for algorithm
    target = "Test"; // Target Phrase
    const population_size = 10; // Population Size

    // Creating the static DOM elements for the page
    document.getElementById("Target Phrase").innerHTML = `Target Phrase: ${target}`
    document.getElementById("Population Size").innerHTML = `Population Size: ${population_size}`

    // Populate the initial population
    population = new Population(population_size, target);

    // Create the dynamic DOM element for the population
    for (let i = 0; i < population.population_size; i++) {
        document.getElementById("Population List").innerHTML +=
            `<li>${population.members[i].phrase}</li>`;
    }

    population.reproduce();
}

function draw() {

    // Selection


    // Reproduction
    // Re-population

}

/* Calculates the reproduction pool of a given population
 * using a fitness function.
 *
 * Returns and ordered array of the old population
 * and each members probability of reproduction based
 * on the reciprocal of the fully normalized fitness value.
 *
 * reproduction probability = 1 / normalized fitness;
 * normalized fitness = fitness / population size;
 */
function reproduction_pool(population, fitness_fun) {
    let reproduction_prob = population_fitness.map(fitness => fitness/total_fitness);
}

function population_fitness(population, fitness_fun) {
    let population_fitness = population.map(test => fitness_fun(target, test));
    const total_fitness = population_fitness.reduce((total, fitness) => total += fitness);

    return {"population_fitness": population_fitness, "total_fitness": total_fitness}
}

/* The Population object represents a population of members
 *
 */
class Population {
    constructor(size, target) {
        this.target = target;
        this.phrase_size = target.length;
        this.population_size = size;

        this.populate();
    }

    /* Populates an initial population of random members */
    populate() {
        this.members = new Array(this.population_size);
        for (let i = 0; i < this.members.length; i++) {
            this.members[i] = new Member(this.target, this.phrase_size);
        }

        // Sort the population
        this.sort_by_fitness();

        // Calculate the fitness for the entire population
        this.calculate_fitness();
    }

    /* Sort the members of the population by fitness */
    sort_by_fitness() {
        this.members.sort((firstEl, secondEl) => {
            if (firstEl.fitness > secondEl.fitness) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    /* Calculates the fitness of entire population using a fitness function
     *
     * This function also updates the fitness of every member.
     */
    calculate_fitness() {
        this.fitness = new Array(this.population_size);
        for (let i = 0; i < this.fitness.length; i++) {
            this.fitness[i] = this.members[i].fitness;
        }

        this.total_fitness = this.fitness.reduce((total, fitness) => total += fitness);
    }

    /* Reproduces by splicing the phrases of 2 parents into a new phrase
     *
     * A member of the population will be chosen to reproduce based on its
     * fitness (i.e. a member with a fitness of 5 will reproduce 5/total_fitness)
     * percent of the time.
     */
    reproduce() {
        // Generate a random sample to decide on the parent
        // samples will be in range [0, 1)
        const sample = Math.random();


        // Find the member that correlates to the sample
        let parents = this.members.filter(member => {
            let prob = member.fitness / this.total_fitness;

            return member <= sample;
        })

        console.log(parents);
    }

    /* Repopulates a population given an evolution function */
    // repopulate(evolution_fun) {
    //     for (let i = 0; i < population.; i++) {
    //         population[i] = evolution_fun(N);
    //     }

    //     return population;
    // }
}
// Reproduce
// Repopulate
// Evolve

/* The Member object represents a member of a population
 *
 * Members come with two attributes:
 *  N: The length of the phrase given on construction
 *  phrase: The current phrase associated with the member
 *      Initialized as a random phrase of length N
 *  fitness: The current fitness of the phrase
 *      Initialized as 0
 *
 * Members has multiple methods:
 *  rephrase(phrase):
 *      Changes the phrase attribute to the given phrase parameter
 *  calculate_fitness(target, fitness_fun):
 *      Calculates the fitness of the Members phrase using the fitness_fun
 *      provided. Updates and returns the new fitness value.
 */
class Member {
    constructor(target, N) {
        this.target = target;
        this.phrase_length = N;
        this.phrase = this.create_random_phrase(N);
        this.fitness = this.calculate_fitness();
    }

    rephrase(phrase) {
        if (phrase.length != this.phrase_length) {
            return new Error("phrase length must match.");
        }

        this.phrase = phrase;
    }

    calculate_fitness() {
        this.fitness = naive_fitness(this.target, this.phrase);

        return this.fitness;
    }

    /* Return a random phrase
     *
     * Returns a phrase of random characters of length N
     */
    create_random_phrase(N) {
        let phrase = "";

        for (let n = 0; n < N; n++) {
            // Selects a random number in range [0, 128)
            // and converts to a string character
            let char = String.fromCharCode(random(32, 128));

            phrase += char;
        }

        return phrase;
    }
}

/* Naive Fitness Function
 *
 * Calculate the similarity between the target
 * and test phrase by checking how many characters
 * are the same are return a value between [0, target.length]
 */
function naive_fitness(target, test) {
    if (target.length != test.length) {
        return new Error("target and test must be the same length.");
    }

    let fitness = 0.0;
    for (let i = 0; i < target.length; i++) {
        for (let j = 0; j < test.length; j++) {
            if (target[i] == test[j]) {
                fitness += 1.0;
            }
        }
    }

    return fitness;
}