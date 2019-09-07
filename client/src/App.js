import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom' 
import './App.css'
import Navbar from './components/layout/Navbar'
import NotFound from './components/layout/Notfound'
import Employee from './components/employess/Employees'

function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component= {Employee} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
