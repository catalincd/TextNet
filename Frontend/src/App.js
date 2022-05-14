import React, {useState} from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import { UserContext } from './UserContext'
 
import Layout from './components/Layout'

import Home from './routes/Home'
import Signup from './routes/Signup'

/*
import Login from './routes/Login'

import Dashboard from './routes/Dashboard'
*/

import './App.css';

function App() {

  const [user, setUser] = useState(null) 


  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signup" component={Signup}/>
          
        </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
}

/*
          <Route path="/login" component={Login}/>
          
          <Route path="/dashboard" component={Dashboard}/>
*/

export default App;