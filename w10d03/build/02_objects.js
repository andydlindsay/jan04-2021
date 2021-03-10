"use strict";
// const admin: IAdvanced = {
// }
const partialUser = {
    username: 'hello',
    age: 42
};
const actualUser = Object.assign(Object.assign({}, partialUser), { isLoggedIn: false });
const user = {
    id: 5,
    username: 'alice',
    age: 24,
    isLoggedIn: false
};
const userTwo = {};
const users = [];
users.push(userTwo);
// users.push('hello');
