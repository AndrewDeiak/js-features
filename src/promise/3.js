/**
 * in promise there is hidden try...catch which can process synchronous errors, but not async
 * to process async errors use reject()
 *  */

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Error");
    }, 1000);
}).catch(console.log);

new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Another Error")
    }, 2000);
}).catch(console.log);