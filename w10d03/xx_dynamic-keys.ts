const names: string[] = ['alice', 'bob', 'carol', 'dean', 'elise', 'alice'];

interface IResults {
  [key: string]: number;
}

const myResults: IResults = {};

for (const name of names) {
  if (myResults[name]) {
    myResults[name] += 1;
  } else {
    myResults[name] = 1;
  }
}

console.log(myResults);
