interface IBook {
  title: string;
}

interface IAuthor {
  penname: string;
  books: IBook[];
  writeBook: (title: string) => boolean
}

const myAuthor: IAuthor = {
  penname: 'Agatha Christie',
  books: [],
  writeBook: function(title: string) {
    // this.books.push({ title });
    return true;
  }
};
