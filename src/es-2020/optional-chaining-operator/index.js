const job1 = {
    title: "Front end dev",
    company: {
        name: "Great Company"
    }
};

const job2 = {
    title: "Front end dev",
};

console.log(job1.company.name);
console.log(job2.company?.name);
