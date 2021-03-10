let a: string | number | boolean = 'Alice';

a = false;
a = 7;
// a = () => {};

a = 'Bob';

for (const el of [1,2,3]) {
  console.log(el);
}

const myArr: (number | string)[] = [1,2,3];
myArr.push(4);
myArr.push('hello');
// myArr.push(true);

