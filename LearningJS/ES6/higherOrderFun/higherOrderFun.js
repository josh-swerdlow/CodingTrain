// Non-arrow notation
// function callback(name) {
//     console.log("Good work " + name + "!");
// }

// function sing(name, callback) {
//     console.log('la la la');
//     callback(name);
// }

// sing("josh", callback);

// // Arror notation
// let callback = name => console.log("Good work " + name + "!");

// function sing(name, callback)
// {
//    console.log('la la la');
//    callback(name);
// }

// sing("Mindy", callback);


// Non-arrow notation
// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     }
// }

// let doubler = multiplier(2);

// console.log(doubler(10));
// console.log(doubler(5));

// // Arror notation
// function multiplier(factor) {
//     return x => x * factor;
// }

// let doubler = multiplier(2);

// console.log(doubler(10));
// console.log(doubler(5));

// Example of map function
let vals = [4, 1, 5, 6, 2, 9];
console.log(vals);

function doubler(x) {
    return x * 2;
}

vals = vals.map(doubler);
console.log(vals);




