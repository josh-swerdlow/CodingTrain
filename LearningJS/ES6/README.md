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

### Arrow Function Declarations =>

Yeh I'm bamboozled.

### for...of loop

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

These are a category of functions that take another function as an input or return a function as an output. There are many higher order functions for arrays (i.e. map, sort, reduce, filter).





## Fun Coding Ideas


[codingTrain]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
[es6]: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr


