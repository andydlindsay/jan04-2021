interface IUser {
  id?: number;
  username: string;
  age: number;
  isLoggedIn: boolean;
  friends?: string[];
}

interface IAdvanced extends IUser {
  password: string;
}

// const admin: IAdvanced = {

// }

const partialUser = {
  username: 'hello',
  age: 42
}

const actualUser: IUser = {
  ...partialUser,
  isLoggedIn: false
}

const user: IUser = {
  id: 5,
  username: 'alice',
  age: 24,
  isLoggedIn: false
};

const userTwo: IUser = {} as IUser;

const users: IUser[] = [];
users.push(userTwo);
// users.push('hello');
