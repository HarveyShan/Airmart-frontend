import React, { useState } from "react";
import axios from "axios";
import Login from "./components/login.component.js"
import Register from './components/register.component.js';
import Home from "./components/homePage.js";
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landingPage.js';

const App = () => {
  // if there's no user, show the login form
  return (

    <Switch>

      <Route
        path="/"
        exact
      >
        <LandingPage />
      </Route>

      <Route
        path="/login"
        exact
      >
        <Login />
      </Route>


      <Route
        path="/register"
        exact
      >
        <Register />
      </Route>


      <Route
        path="/home"
        exact
      >
        <Home />
      </Route>

    </Switch>


  );
};

export default App;