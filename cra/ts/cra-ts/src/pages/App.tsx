import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import Dashboard from '../pages/Dashboard'
import Documents from '../pages/Documents'
import HelloWorld from '../components/HelloWorld'

const App: React.FC = () => {
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
  );
}

export default App;
