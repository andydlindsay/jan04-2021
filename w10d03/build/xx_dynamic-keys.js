"use strict";
const names = ['alice', 'bob', 'carol', 'dean', 'elise', 'alice'];
const myResults = {};
for (const name of names) {
    if (myResults[name]) {
        myResults[name] += 1;
    }
    else {
        myResults[name] = 1;
    }
}
console.log(myResults);
