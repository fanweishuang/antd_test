import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom"
import Home from "./pages/home"
import Index from "./pages"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink to={'/home'}>首页</NavLink> */}
        <Switch>
          <Route exact path='/' component={Index}></Route>
          <Route exact path='/home' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
