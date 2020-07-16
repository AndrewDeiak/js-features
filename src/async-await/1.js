/** async function always return Promise */
/** await can be only in async */

const one = async () => 1;
const two = async () => Promise.resolve(2);

one().then(console.log);
two().then(console.log);
