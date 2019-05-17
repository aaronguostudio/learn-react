import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { themes, userInfoMock, ThemeContext } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/index.css'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

    // Global State:
    // - theme data and control
    // - user data
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      user: userInfoMock,
    }
  }

  render () {
    return (
      <Router>
        <ThemeContext.Provider value={this.state}>
          <DefaultLayout>
            <Switch>
              <ErrorBoundary>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route path='/products' component={Products} />
                <Route component={NotFound} />
              </ErrorBoundary>
            </Switch>
          </DefaultLayout>
        </ThemeContext.Provider>
      </Router>
    )
  }
}

export default App;
