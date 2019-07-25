import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MessageList from './Message/MessageList';
import MessageForm from './Message/MessageForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-panel">
        <Link to="/">Products</Link>
        <Link to="/add-product">Add product</Link>
      </div>
      <Switch>
        <Route exact path="/" component={MessageList} />
        <Route exact path="/add-product" component={MessageForm} />
      </Switch>
    </div>
  );
}

export default App;