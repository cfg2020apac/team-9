import React from 'react';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';


function App() {

  // TO CHANGE ZOOM PART IF CHANGED WEBSITE
  const site = window.location.origin
  const auth_link = `https://zoom.us/oauth/authorize?response_type=code&redirect_uri=${site}&client_id=LFnBwJLsSRKhafeNUdYiVw`
  
  // TO CHANGE
  const backend_url = "http://localhost:5000"
  
  async function get_access_token(){
    let params = new URLSearchParams(document.location.search.substring(1))
    let code = params.get("code")
    
    const data = {"auth_code": code}

    const api_url = `${backend_url}/get-access-token`

    let res = await fetch(api_url, {method:'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify(data)})

    let body = await res.json();

    console.log(body)
    localStorage.setItem("access-token", body.access_token)
  }

  async function make_recurring_meeting(){
    let accesstoken = localStorage.getItem("access-token")
    let email = "jiale_lee@mymail.sutd.edu.sg"

    const data = {"access_token": accesstoken, "email": email}
    const api_url = `${backend_url}/make-recurring-meeting`

    let res = await fetch(api_url, {method:'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify(data)})

    let body = await res.json();
    console.log(body)
  }

  async function get_attendance(){
    let accesstoken = localStorage.getItem("access-token")
    let meetingId = 12345

    const data = {"access_token": accesstoken, "meetingId": meetingId}
    const api_url = `${backend_url}/get-attendance`

    let res = await fetch(api_url, {method:'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify(data)})

    let body = await res.json();
    console.log(body)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href={auth_link}>
          get_auth_token
        </a>
        <a onClick={get_access_token}>
          get_access_token
        </a>
        <a onClick={make_recurring_meeting}>
          make_recurring_meeting
        </a>
        <a onClick={get_attendance}>
          get_attendance
        </a>
      </header>
    </div>
  );
}

export default App;
