import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Book from './Book';

const Books = () => {
  return (
    <div>
      <h2>Books</h2>
      <Router forceRefresh={true}>
        <div>
          <Link to="/books/1">Book #1 </Link>
          <Link to="/books/2">Book #2 </Link>
          <Link to="/books/3">Book #3</Link>
        </div>

        <Switch>
          <Route path="/books/:bookId" component={Book} />
          <Route path="/books">
            <h2>Please choose a book from the list above</h2>
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default Books;
