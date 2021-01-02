const getPrimeNumbers = array => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] % array[i] === 0) {
                const index = array.indexOf(array[j]);
                if (index > -1) {
                    array.splice(index, 1)
                }
            }
        }
    }
    return result;
};

const array = [];
for (let i = 2; i <= 101; i++) {
    array.push(i)
}

console.log("Prime numbers:", getPrimeNumbers(array));
