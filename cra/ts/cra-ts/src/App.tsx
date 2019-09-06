import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Dashboard from './pages/Dashboard'
import Documents from './pages/Documents'
import HelloWorld from './components/HelloWorld'

import { connect } from 'react-redux'
import { AppState } from './store'
import { setAuthor, setDocument, setTitle } from './store/document/actions'
import { DocumentState } from './store/document/types'

// interface ICounterContext {
//   count: number,
//   updateCount(delta: number): void,
// };
// const NumberContext = React.createContext<ICounterContext>({
//   count: 42,
//   updateCount: (n) => {
//     throw new Error('updateCount() not implemented')
//   }
// })

interface AppProps {
  setAuthor: typeof setAuthor
  setDocument: typeof setDocument
  setTitle: typeof setTitle
  document: DocumentState
}

const App: React.FC<AppProps> = (props) => {
  const {
    document
  } = props

  console.log('>document', document)
  return (
    <div className="container">
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/hello" component={HelloWorld} />
          <Route path="/documents" component={Documents} />
        </Switch>
      </DefaultLayout>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  document: state.document,
})

export default connect(
  mapStateToProps,
  { setAuthor, setDocument, setTitle }
)(App)
