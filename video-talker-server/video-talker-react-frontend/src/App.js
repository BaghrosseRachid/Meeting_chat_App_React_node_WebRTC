import './App.css';
import React,{useEffect} from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { connectWebSocket } from './utils/wssConnection/wssConnection';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';

function App() {
  useEffect(() => {
    connectWebSocket()
  }, [])
  return (
    <Router>
      <Switch>
        <Route path='/dashboard'>
           <Dashboard/>
        </Route>
        <Route path='/'>
           <LoginPage/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
