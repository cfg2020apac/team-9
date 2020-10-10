import React from 'react';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import { makeStyles } from '@material-ui/styles';
import StudentHomePage from './Components/StudentPage/StudentHomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Background from './Assets/bg.jpg';
import StudentProfile from './Components/StudentPage/Profile/Profile'
import VolunteerHomePage from './Components/VolunteerPage/VolunteerHomePage'
import AdminHomePage from './Components/AdminPage/AdminHomePage';
import StudentForms from './Components/AdminPage/StudentForms/StudentForms'
import VolunteerForms from './Components/AdminPage/VolunteerForms/VolunteerForms'
import Registration from './Components/Registration/Registration'

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
      <Route path='/studentprofile' exact render={() => <StudentProfile />} />
      <Route path='/volunteerhomepage' exact render={() => <VolunteerHomePage />} />
      <Route path='/adminhomepage' exact render={() => <AdminHomePage />} />
      <Route path='/studentforms' exact render={() => <StudentForms />} />
      <Route path='/volunteerforms' exact render={() => <VolunteerForms />} />
      <Route path='/registration' exact render={() => <Registration />} />
      <Redirect to='/signin' />
    </Switch>
  )
  return (
    <div className={classes.root}>
      {routes}
    </div>
  );
}

