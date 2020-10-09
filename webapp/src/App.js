import React from 'react';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';


function App() {


  const site = window.location.origin
  const auth = `https://zoom.us/oauth/authorize?response_type=code&redirect_uri=${site}&client_id=LFnBwJLsSRKhafeNUdYiVw`
  

  function a(){
    let params = new URLSearchParams(document.location.search.substring(1))
    let code = params.get("code")

    const getaccesstoken = `https://zoom.us/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=${site}`
    
    var buffer = new Buffer("Basic LFnBwJLsSRKhafeNUdYiVw:MYmxuf7ogBMta0RiXam6bFFPflSCT6A9");
    let cred = buffer.toString('base64');



    /*
    fetch(getaccesstoken, {
        method: 'POST',
        headers:{
          'Authorization': cred,
          'mode':'cors',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
        }
      }
    ).then(function(res){ return res })
    .then(function(data){ console.log( data ) })
    */
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <a href={auth}>
          auth
        </a>
        <a onClick={a}>
          aaa
        </a>
      </header>
    </div>
  );
}

export default App;
