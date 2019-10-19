import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import DefaultLayout from './layouts/DefaultLayout'
import Company from './pages/Company'
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import Users from './pages/Users'

// Support
import Emails from './pages/support/Emails'
import HelloWorld from './components/HelloWorld'
import NotFound from './pages/NotFound'

import { AppState } from './store'
import { setAuthor, setDocument, setTitle } from './store/document/actions'
import { DocumentState } from './store/document/types'
import { SessionState } from './store/session/types'
import { UserState } from './store/user/types'
import AppContext from './context'

interface AppProps {
  setAuthor: typeof setAuthor
  setDocument: typeof setDocument
  setTitle: typeof setTitle
  document: DocumentState
  session: SessionState
  user: UserState
}

const App: React.FC<AppProps> = (props) => {
  const {
    document,
    session,
    user
  } = props

  return (
    <AppContext.Provider value={{theme: session.theme}}>
      <div className={`container ${session.theme}`}>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/company" component={Company} />
            <Route exact path="/hello" component={HelloWorld} />
            <Route path="/documents" component={Documents} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/emails" component={Emails} />
            <Route component={NotFound} />
          </Switch>
        </DefaultLayout>
      </div>
    </AppContext.Provider>
  )
}

const mapStateToProps = (state: AppState) => ({
  document: state.document,
  session: state.session,
  user: state.user
})

export default connect(
  mapStateToProps,
  { setAuthor, setDocument, setTitle }
)(App)
