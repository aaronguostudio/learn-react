import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import './styles/index.css';

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/products' component={Products} />
      </DefaultLayout>
    </Router>
  );
}

export default App;
