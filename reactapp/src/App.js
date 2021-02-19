import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import MainPage from './pages/MainPage'
import Profil from './pages/Profil'
import QrCodes from './pages/QRCodes'
import Login from './pages/Login'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import userReducer from './reducers/user.reducer'

const store = createStore(userReducer);

function App() {
  return (
    <Provider store={store}>
      <header className="QR codes creator">
      </header>
      <Router>
        <Switch>
          <Route component={MainPage} exact path='/' />
          <Route component={Profil} exact path='/Profil' />
          <Route component={QrCodes} exact path='/QRCodes' />
          <Route component={Login} exact path='/Login' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
