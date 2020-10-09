import React from 'react';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  let routes = (
    <Switch>
      <Route path="/signin" exact render={() => <Signin />} />
      <Route path='/signup' exact render={() => <Signup />} />
      <Redirect to='/signin' />
    </Switch>
  )
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
