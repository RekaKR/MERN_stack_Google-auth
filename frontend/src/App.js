import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './style.css'

import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'

function App() {
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
            <Login />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
