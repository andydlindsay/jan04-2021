interface IContainer<T> {
  name: string;
  contents: T;
  myArr?: T[];
}

const stringContainer: IContainer<string> = {
  name: 'string container',
  contents: 'hello world'
}

const numberContainer: IContainer<number> = {
  name: 'number container',
  contents: 42
}