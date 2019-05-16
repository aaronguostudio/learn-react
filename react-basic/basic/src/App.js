import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { ThemeProvider } from './context/ThemeContext'
import './styles/index.css'

const THEME = {
  theme: 'light',
  icon: 'flat'
}

function App() {
  return (
    <Router>
      <ThemeProvider value={THEME} >
        <DefaultLayout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/products' component={Products} />
            <Route component={NotFound} />
          </Switch>
        </DefaultLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
