const one = async () => {
    const delay = new Promise((resolve, reject) => {
        setTimeout(() => resolve("delayed"), 3000)
    });

    /** wait until (3s) promise resolve */
    const result = await delay;
    return result;
};

one().then(console.log);
