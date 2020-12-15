const obj = {name: "", surname: "Deiak", age: 0};

obj.name ||= "Andrew";
obj.age ||= 23;

obj.surname &&= "IronMan";

console.log(obj);
