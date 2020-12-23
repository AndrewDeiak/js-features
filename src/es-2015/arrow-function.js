this.name = "Michael";

const person1 = {
    name: "Andrew",
    logInfo: function () {
        setTimeout(() => {
            console.log("this", this);
            console.log("this.name", this.name)
        }, 1000)
    }
};

const person2 = {
    name: "Peter",
    logInfo: function () {
        setTimeout(function () {
            console.log("this", this);
            console.log("this.name", this.name)
        }, 1000)
    }
};

person1.logInfo();
person2.logInfo();
