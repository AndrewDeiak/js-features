const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("success data p1"), 200));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("Something went wrong p2"), 300));
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve("success data p3"), 1000));

Promise.race([p1, p2, p3]).then(result => {
    console.log(result);
});


Promise.all([p1, p2, p3]).then(result => {
    console.log(result);
});

/* always know the result of all Promises */
Promise.allSettled([p1,p2,p3]).then(result=>{
    console.log(result);
});
