function Counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

const counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());

const anotherCounter = Counter();
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());
