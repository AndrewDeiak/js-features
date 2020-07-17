class Users {
    async delay() {
        return await new Promise((resolve => {
            setTimeout(() => resolve("1s"), 1000)
        }));
    }

    async getUsers() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
            xhr.send();
            xhr.responseType = "json";
            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(`Error ${xhr.status}: ${xhr.statusText}`)
                } else {
                    resolve(xhr.response)
                }
            }
        })
    }
}

const users = new Users();

users
    .delay()
    .then(wait => console.log("delay", wait))
    .then(() => users.getUsers())
    .then(response => console.log("users", response))