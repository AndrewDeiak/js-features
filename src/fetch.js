async function getUsers(names) {
    const users = [];
    for (let name of names) {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${name}`);
            if (!res.ok) {
                throw new Error(`${name} of user not find`)
            }
            let user = await res.json();
            users.push(user)
        } catch (e) {
            console.log(e);
        }
    }
    return await Promise.all(users)
}

getUsers([120, 1, 2, 3, 4, 5, 6, 7, 8, 9]).then(response => console.log(response));
