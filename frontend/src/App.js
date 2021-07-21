import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './style.css'

import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'

function App() {


  const googleSignIn = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&prompt=select_account&client_id=762187224127-b8de8kcd0b8a01ni71a7nnlakacliolo.apps.googleusercontent.com&scope=openid%20profile email&redirect_uri=http://localhost:3000/login"
  }


  return (
    <Router>
      <div className='app'>
        <Route path='/' >
          <Header />
        </Route>

        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login googleSignIn={googleSignIn} />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
