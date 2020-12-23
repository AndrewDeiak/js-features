function hello() {
    console.log("Hello", this)
}

const person = {
    name: "Andrew",
    age: 23,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

person.sayHello();
person.sayHelloWindow();

const peter = {
    name: "Peter",
    age: 22
};

const fnLogInfo = person.logInfo.bind(peter, "Front end dev");
fnLogInfo(111111);
console.dir(fnLogInfo);

person.logInfo.call(peter, "Teacher", 2222222);

// Max value in array
console.log(Math.min.apply(null, [10, 20, 1]));
