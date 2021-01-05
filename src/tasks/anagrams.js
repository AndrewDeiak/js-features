let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    const map = new Map();
    arr.forEach(item => {
        const renamed = [...item.toLowerCase()].sort().join("");
        map.set(renamed, item)
    });

    return Array.from(map.values())
}

console.log(aclean(arr));
