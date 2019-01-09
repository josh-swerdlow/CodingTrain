# Topics of Javascript/ES6-ES8-p5.js Tutorial

## Introduction

This folder contains the relevant files for [The Coding Train's][codingTrain] [Topics of Javascript/ES6-ES8-p5.js Tutorial][es6] series.

This will mostly focus on getting an introduction to to proper syntax. There may be small exercises shown as I move along, but hopefully this document can serve as a quick cheat sheet for some of the new syntax introduced. I don't believe any projects created in this because I will immediately start using it in other projects that I code up.

## Notes

### What is ES6?

It stands for ECMAScript 2015 and they are the people that decide the syntax for javascript.

### let vs var
```js
var x = 100;
let x = 100;
const x = 100;
```

- var is used to declare something in "function scope"
- let is used to declare something in "block scope"
- const is used to declare something in "block scope"

Function scope is the scope of the entire function. Block scope is the scope of the block where the variable was defined.

#### Hoisting

Hoisting is a process that expands any variable declarations to the appropriate scope of how the variable was declared. For example

```js
example() {
    console.log(i);
    var x = 1;
    for (var i = 0; i < 100; i++)
    {
        var y = 21;

        x+=y;
    }
    console.log(i);
}
```

Would turn into
```js
example() {
    var x, i, y;
    console.log(i);

    x = 1;
    for (i = 0; i < 100; i++)
    {
        y = 21;

        x+=y;
    }
    console.log(i);
}
```

So hoisting has taken all of the variables declared as var and put them into the entire function scope; however, they will be undefined until initialized. That does not mean they are inaccessible though! In both cases the console would return the following.
>```js
> undefined
> 100
>```

### Const

```js
const x = 100;
```

const is used to help your computer more efficiently allocate memory for data because it stores the data under the assumption that the data is *permanently* constant. This means `const` variables must always be initialized on the same line as it is declared and they cannot be reinitialized. Both of these would throw errors.

In addition, `const` can be used for object and function declarations. In fact, using them for function declarations might be smart given one doesn't tend to reassign functions all that much.

Objects:
```js
const particle = {x: 100, y: 200};
```

Functions:
```js
const fun = function() {...}
```

### Arrow Function Declarations (=>)

Yeh I'm bamboozled.

### For...of Loops

Normally Javascript uses normal C style for loops which iterate through some counter variable for indexing through arrays.

```js
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}
```

However, with ES6 we can iterate through arrays using a different syntax very much like we do in Python.

```js
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let element of array)
{
    console.log(element);
}
```

These two loops will perform the exact same thing.

### Higher Order Functions

These are a category of functions that take another function as an input or return a function as an output. There are many higher order functions for arrays (i.e. map, sort, reduce, filter). This has been really important to a lot of modules that we've been using.


**An Example of Passing A Function As An Input**
```js
function callback(name) {
    console.log("Good work " + name + "!");
}

function sing(name, callback) {
    console.log('la la la');
    callback(name);
}

sing("josh", callback);
```

However this required making this entire other function `callback` which only prints out a line of code. So let's make this a bit cleaner using an anonymous function and ES6 syntax.

```js
let callback = name => console.log("Good work " + name + "!");

function sing(name, callback)
{
   console.log('la la la');
   callback(name);
}

sing("josh", callback);
```

Both of these return the same values.

```js
la la la
Good work josh!
```

**An Example of Returning A Function As An Output**

```js
function multiplier(factor) {
    return function(x) {
        return x * factor;
    }
}

let doubler = multiplier(2);

console.log(doubler(10));
console.log(doubler(5));
```

However, this requires us to put this function inside of another function and it can be a bit hard to read. So let's make this a bit cleaner using an anonymous function and ES6 syntax. We can turn this

```js
function (factor) {
    return factor * x;
}
```

into something a little bit cleaner like this

```js
x => x * factor;
```

Since there was never a name to this function is has always been an anonymous function. Then we removed the `function` declaration using the ES6 `=>` syntax. In addition to allowing us to remove the `function` declaration, we can spruce up the code a little more.

- If there is only one input argument then the `()` around the argument can be deleted.
- If there is only one line of code then the `{}` around the rest of the function can be deleted.
- If there is only one line of code then the `return` is assumed and can be deleted.

```js
function multiplier(factor) {
    return x => x * factor;
}

let doubler = multiplier(2);

console.log(doubler(10));
console.log(doubler(5));
```

Isn't that a lot smoother?


Both ways return the same values.

```js
20
10
```

#### Examples of Higher Order Functions

- **map**: Applies a given function to every element of the array and returns the new value into a new array
    ```js
    let vals = [4, 1, 5, 6, 2, 9];
    console.log(vals);

    function doubler(x) {
        return x * 2;
    }

    vals = vals.map(doubler);
    console.log(vals);
    ```

    However, we can make this code cleaner by using ES6 syntax.
    ```js
    let vals = [4, 1, 5, 6, 2, 9];
    console.log(vals);

    vals.map(x => x * 2);
    console.log(vals);
    ```
    Both code snippets output the same code!

    ```js
    [4, 1, 5, 6, 2, 9]
    [8, 2, 10, 12, 4, 18]
    ```

There are many more of these higher order functions, particularly ones that operate on arrays. See the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

### Promises

We will be looking at promise objects through the lens of API querying. To do this we will use the following function to query JSON urls.

```js
fetch(url);
```

While fetching there can be three results depending on what happens internally.

- pending
- fulfilled
- rejected

So using promises we can simply check the status from the fetch function to see if it is still pending, fulfilled, or rejected. However, if we did this then we would have to continuously query the promise for the status of the fetch and this would be a blocking call. So, we can use the functions `then()` and `catch()` to execute our queries asynchronously.

```js
let promise = fetch(url);

promise.then(returnStuff);
promise.catch(returnErr);

function returnStuff(data) {
    console.log(data);
}

function returnErr(err)
{
    console.log(err);
}
```

This a good and uses all the correct functions, but there is some nice javascript and ES6 syntax one can use to make this cleaner. We will *chain* the fetch function to the then and catch functions. Remember, fetch returns a promise object!

```js
fetch(url).then(returnStuff).catch(returnErr);

function returnStuff(data) {
    console.log(data);
}

function returnErr(err)
{
    console.log(err);
}
```
We are getting better, but we can do better using ES6 `=>` syntax.

```js
fetch(url)
    .then(response => response.json())
        .then(data => console.log(data))
    .catch(err => console.log(err));
```

Well isn't that clean? There's just one more thing. The `fetch` function will not return the data in JSON format so we have to convert it as so `fetch(url).json()`. Unfortunately, that function call also returns a promise, so we should chain it accordingly.

#### Creating your own promise compatible function

If you want to create your own promise compatible function one simply needs to return a promise object `return new Promise(pathway_to_resolution);` and give the promise pathways to resolve or reject that promise via a function. For example

```js
function makeNegative(number) {
    return new Promise((resolve, number) =>
    {
        if (isNaN(number))
        {
            reject(new Error("Number must be a number"));
        }
        else {
            resolve();
        }
    })
}
```

#### async/await

These are some nice syntactical sugar that was added in ES8.



## Fun Coding Ideas


[codingTrain]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
[es6]: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr


