const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
xhr.setRequestHeader('X-Auth', '456');
xhr.send();
