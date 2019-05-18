import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './services/store'
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

    const initialState = {}
    return (
      <Provider store={store(initialState)}>
        <Router>
          <ThemeContext.Provider value={this.state}>
            <DefaultLayout>
              <ErrorBoundary>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route path='/products' component={Products} />
                  <Route component={NotFound} />
                </Switch>
              </ErrorBoundary>
            </DefaultLayout>
          </ThemeContext.Provider>
        </Router>
      </Provider>
    )
  }
}

export default App;
