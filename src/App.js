import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";

import Home from "./components/home/Home"
import ProductDetail from "./components/productDetail/ProductDetail"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id">
            <ProductWithId />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function ProductWithId() {
  const { id } = useParams()

  if (isNaN(id)) {
    return <Redirect to="/" />
  }

  return <ProductDetail productId={id} />
}

export default App;
