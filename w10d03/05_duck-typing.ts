let firstName = 'Alice';

interface ILoginUser {
  username: string;
  password: string;
}

const login = (user: ILoginUser): boolean => {
  return true;
}

const myUser = {
  username: 'hello',
  password: 'world'
};

login(myUser);
// login({ username: 'hello' });
