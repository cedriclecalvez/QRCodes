import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import userReducer from './reducers/user.reducer'

const state = createStore(userReducer);

function App() {
  return (
    <Provider store={store}>
      <header className="QR codes creator">
      </header>
      <Router>
        <Switch>
          <Route component={MainPage} exact path='/' />
          <Route component={Profil} exact path='/Profil' />
          <Route component={QrCodes} exact path='/MyQRCodes' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
