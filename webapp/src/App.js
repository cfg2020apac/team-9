import React from 'react';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import { makeStyles } from '@material-ui/styles';
import StudentHomePage from './Components/StudentPage/StudentHomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Background from './Assets/bg.jpg'

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
}))

export default function App() {
  const classes = useStyles()
  let routes = (
    <Switch>
      <Route path="/signin" exact render={() => <Signin />} />
      <Route path='/signup' exact render={() => <Signup />} />
      <Route path='/studenthomepage' exact render={() => <StudentHomePage />} />
      <Redirect to='/signin' />
    </Switch>
  )
  return (
    <div className={classes.root}>
      {routes}
    </div>
  );
}

