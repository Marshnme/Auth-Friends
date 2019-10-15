import React from 'react';
import './App.css';
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { Route, Link, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/friends-list">Friends</Link></li>
      </ul>
      <Switch>
        <Route coponent={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/friends-list" component={FriendsList}/>
      </Switch>
    </div>
  );
}

export default App;
