let mass1 = [1, 7, 7, 39];


let uniq = true;
for (let i = 0; i < mass1.length; i++) {
    for (let j = 0; j < i; j++)
    if (mass1[j] === mass1[i]) {
        uniq = false
    }
}

console.log(uniq)