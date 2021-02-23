import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>Products Page!</h2>
      <Router>
        <nav>
          <Link to="/products/1">Hammer</Link><br/>
          <Link to="/products/2">Ball-peen</Link><br/>
          <Link to="/products/3">Claw</Link><br/>
          <Link to="/products/4">Sledge</Link><br/>
          <Link to="/products/5">Mallet</Link><br/>
          <Link to="/products/6">Arm &</Link>
        </nav>

        <Switch>
          <Route path="/products/:product_id">
            <Product />
          </Route>
          <Route path="/products">
            <h2>Please choose a product from the list above</h2>
          </Route>
        </Switch>


      </Router>
    </div>
  );
};

export default Products;
