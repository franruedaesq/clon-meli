import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
// Importamos las paginas
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Paises from './pages/Paises/Paises'
import Product from './pages/Product/Product'


ReactDOM.render(
  <Router>
    <Route exact path="/"  component={Paises} />
    <Route exact path="/home"  component={Home} />
    <Route exact path="/product/:id"  component={Product} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
