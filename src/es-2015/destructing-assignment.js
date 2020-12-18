const person = {
    fullName: "Andrew Deiak"
};
const {fullName} = person;
const {fullName: customName} = person;

console.log(fullName);
console.log(customName);

const arr = ["andrew", "deiak", "front end"];
const [name, surname, role] = arr;

console.log(name, surname, role);
