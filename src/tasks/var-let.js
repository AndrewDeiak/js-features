"use strict";

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("j", j), 1000)
}

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("i", i), 1000)
}
