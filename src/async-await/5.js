class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}


const demoGithubUser = async () => {
    let user;
    while (true) {
        let name = prompt("Login", "Andrew");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
                alert("This user does not exist, please re-enter.");
            } else {
                throw err;
            }
        }
    }
    alert(`Name: ${user.name}.`);
    return user;
}

demoGithubUser();