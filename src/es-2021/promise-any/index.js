/**
 any es2020
 - return first resolved Promise regardless the other promises rejected
 - all promises rejected - AggregateError: All promises were rejected

 race
 - return first resolved Promise, if the others does`t rejected
 - one of the promise rejected before the resolved - Error
 */

const p1 = new Promise((resolve, reject) => setTimeout(() => reject("a"), 100));
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve("b"), 200));

// Promise.race([p1, p2]).then(r => console.log(r));
Promise.any([p1, p2]).then(r => console.log(r));
