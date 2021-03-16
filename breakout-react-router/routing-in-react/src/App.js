import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

const App = () => {
  return (
    <div className="App">
      <h2>React Router!</h2>
      <Router forceRefresh={true}>
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/books">Books</Link>
        </div>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
