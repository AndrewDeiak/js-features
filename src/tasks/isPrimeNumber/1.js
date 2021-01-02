const isPrime = n => {
    if (n === 2) {
        return true;
    }

    if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true
};

const arr = [];

for (let i = 0; i <= 101; i++) {
    if (isPrime(i)) {
        arr.push(i)
    }
}

console.log("Prime numbers:", arr);
