const getUsers = async () => {
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await usersResponse.json();

    const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${user.id}`);
    const todos = await todosResponse.json();

    const delay = await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    return {users, todos};
};

getUsers().then(console.log);
