import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ProductList from './Product/ProductList';
import ProductForm from './Product/ProductForm';
// import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="nav-panel">
        <Link to="/">Products</Link>
        <Link to="/add-product">Add product</Link>
      </div>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/add-product" component={ProductForm} />
      </Switch>
    </div>
  );
}

export default App;