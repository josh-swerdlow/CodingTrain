# Shakespeare's Monkey Genetic Evolution of Phrases

The idea for the project was taken from [The Coding Train's][train] Youtube series [Genetic Algorithms][genAlg]. I will be writing it myself and making modification as needed. This is meant to be an introductory exercise to the gist of genetic algorithms because, if needed, I can view his code to compare.

## Algorithm
1. **Initialization**: Create a population P of N random elements each
2. **Evolution**
    - Selection: Calculate the fitness using fitness function F to select p parents for reproduction
    - Reproduction: Use some heurtistic (commonly one uses the fitness to calculate a probability that an element will be selected for reproduction) to create a new element.
        - *Crossover*: A heuristic to splice the information of the p parents into a new child phrase
        (i.e. Take 1/p of each parent and splice them together to create your new child).
        - *Mutation*: A heuristic to randomly alter the information of the child before it is introduced in the next population (i.e. A 1% probability that some element of the child will be altered in some way).
    - Repopulation: Replace the old population with the new population and repeat.

## Random/Selected Phrase Genetic Algorithm Evolution

This would implement the architecture for the algorithm outlined in the web series for the following problem. Given some target phrase and a random intial population implement a genetic algorithm to create the target phrase.

### Visuallizer & UI
I would create some sort of webpage visuallize and user interface to that users can change the mutation rate, population size, etc. In addition, they would get metrics on how fast the algorithm works etc given the parameters.

### Algorithm
I would create various genetic algorithms using different heuristics and store them in various classes. For example, there could be on crossover class which would contain various crossover function. Each function would probably take an array of phrases and return a single child. The same would be implemented with selection, mutation, repopulation (perhaps the population size could increase or decrease over time?) steps of the algorithm.

### Further Possibilities
Genetic algorithm seem to painfully obvious algorithms to parallelize so it would be interesting to implement different paralllel versions of these algorithms. Initially there seems to be a couple different places to parallelize the code for speed increases.
- A large population size decrease the speed because of massive evolution and repopoulation steps. So splitting large population pools could allow one to maintain overall genetic diversity while balancing runtime.
- On the evolution step, once the fitness function has been evaluated over the entire population, one could simply parallelize the crossover and mutation step.

### Reasons
This would be a great way to practice my javascript, work on static webpage implementations with CSS and HTML, and a good way for me to review the search algorithms.


[train]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
[genAlg]: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bw4n02JP28QDuUdNi3EXxJ

