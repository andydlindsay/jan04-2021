import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const MainRouter = () => {

  return (
    <div>
      <h2>Main Router</h2>

      <Router>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/products">Products</Link>
        </nav>
      
        <Switch>
          <Route path="/about">
            <h2>Welcome to the about page</h2>
          </Route>
          <Route path="/products" component={Products} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainRouter;
