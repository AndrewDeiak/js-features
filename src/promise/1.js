Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve("one"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("two"), 1000))
]).then(firstResult => console.log(firstResult));

