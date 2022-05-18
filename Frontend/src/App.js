import React, {useState} from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import { UserContext } from './UserContext'
 
import Layout from './components/Layout'

import Home from './routes/Home'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Dashboard from './routes/Dashboard'
import Profile from './routes/Profile'

import './App.css';

function App() {

  const [user, setUser] = useState(null) 


  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
}

export default App;