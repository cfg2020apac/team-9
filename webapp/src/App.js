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

    let a = await fetch(api_url, {method:'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify(data)})

    let body = await a.json();

    console.log(body)
    localStorage.setItem("access-token", body.access_token)
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
      </header>
    </div>
  );
}

export default App;
