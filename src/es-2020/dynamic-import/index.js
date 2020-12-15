// using async/await
(async function () {
    const moduleSpecifier = "./utils.js";
    const module = await import(moduleSpecifier);
    console.log(module);
    console.log(module.NAME);
})();

// using Promise
const moduleSpecifier = "./utils.js";
import(moduleSpecifier).then(module => {
    console.log(module);
    console.log(module.NAME);
});
