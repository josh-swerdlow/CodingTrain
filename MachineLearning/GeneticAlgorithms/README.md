# Genetic Algorithms

## Introduction

This folder contains the relevant files for [The Coding Train's][ref1] [Genetic Algorithm](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bw4n02JP28QDuUdNi3EXxJ) series.

## Notes

### Shakespeare's Monkey Thought Experiment
Given a monkey, a computer with a keyboard, infinite time, and complete random keystrokes then the monkey would eventually type all of Shakespeare's completed works. Wow..amazing.

If one wanted to see if a monkey could type "to be or not to be that is the question" then:

- 1/27 chance of randomly type a "t"
- 1/27 * 1/27 chance of randomly typing a "t" and then an "o"
- (1/27)^39 chance of randomly type the full phrase

The math ends up being a 1 in approximately 67.0e54 chance. That's ridiculous. However, using genetic algorithms we can search the space of possibilites a lot faster.

### Darwinian Natural Selection

- **Heredity**: There must be a process in place by which children recieve the properties fo the their parents.
- **Variation**: There must be a variety of traits present in the population or a means with which to introduce variation.
- **Selection**: There must be a mechanism by whcih some members of a population have the opportunity to be parents and pas down their genetic information and some do not. This is typically referred to as a "survival of the fittest"

Genetic Algorithms using natural selection as inspiration to optimize solutions.

### Example: Creating a Genetic Algorithm to create the phrase "unicorn"

Keeping the three principles of Darwinian Natural Selection in mind we would like 'evolve' the phrase "unicorn" using a genetic algorithm.

As an example we will take the following to be our initial population.
P = {"unijorn", "pancake", "aaaaaah", "popcorn"} with initial fitnesses of F(P) = {5, 1, 0, 4}. The fitness function is the number of elements in the population phrase that match the target phrase. Now, one must select the parents for the next population to generate N = 4 new children. Let's say these are selected using the fitness score as a percentage (i.e. "unijorn" has a 50% chance of being selected) and we will only use p = 2 parents for the crossover. We then select parents in sets p_i = {p_i1, p_i2} to generate the children using a crossover heuristic of selecting half of parent 1 and half of parent 2 to create the child. For simplicities sake, there will be _no_ mutation.

| Parent Group |       Parent 1 & Parent 2      | Unmutated Child |
| ------------ | ------------------------------ | ----------------|
|       0      | ("**uni**jorn", "pon**corn**") |     "unicorn"   |
|       1      | ("**pop**corn", "uni**jorn**") |     "popjorn"   |
|       2      | ("**aaa**aaah", "uni**jorn**") |     "aaajorn"   |
|       3      | ("**uni**jorn", "pop**corn**") |     "unicorn"   |


#### Algorithm
1. **Initialization**: Create a population P of N random elements each
2. **Evolution**
    - Selection: Calculate the fitness using fitness function F to select p parents for reproduction
    - Reproduction: Use some heurtistic (commonly one uses the fitness to calculate a probability that an element will be selected for reproduction) to create a new element.
        - *Crossover*: A heuristic to splice the information of the p parents into a new child phrase
        (i.e. Take 1/p of each parent and splice them together to create your new child).
        - *Mutation*: A heuristic to randomly alter the information of the child before it is introduced in the next population (i.e. A 1% probability that some element of the child will be altered in some way).
    - Repopulation: Replace the old population with the new population and repeat.



## Fun Coding Ideas

### Random/Selected Phrase Genetic Algorithm Evolution

This would implement the architecture for the algorithm outlined in the web series for the following problem. Given some target phrase and a random intial population implement a genetic algorithm to create the target phrase.

#### Visuallizer & UI
I would create some sort of webpage visuallize and user interface to that users can change the mutation rate, population size, etc. In addition, they would get metrics on how fast the algorithm works etc given the parameters.

#### Algorithm
I would create various genetic algorithms using different heuristics and store them in various classes. For example, there could be on crossover class which would contain various crossover function. Each function would probably take an array of phrases and return a single child. The same would be implemented with selection, mutation, repopulation (perhaps the population size could increase or decrease over time?) steps of the algorithm.

#### Further Possibilities
Genetic algorithm seem to painfully obvious algorithms to parallelize so it would be interesting to implement different paralllel versions of these algorithms. Initially there seems to be a couple different places to parallelize the code for speed increases.
- A large population size decrease the speed because of massive evolution and repopoulation steps. So splitting large population pools could allow one to maintain overall genetic diversity while balancing runtime.
- On the evolution step, once the fitness function has been evaluated over the entire population, one could simply parallelize the crossover and mutation step.

#### Reasons
This would be a great way to practice my javascript, work on static webpage implementations with CSS and HTML, and a good way for me to review the search algorithms.

## References
[ref1]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw


