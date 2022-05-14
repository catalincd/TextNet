import React, {useContext} from "react"
import Layout from '../components/Layout'
import { UserContext } from "../UserContext"
import Title from 'reactjs-title'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';

const HomeLayout = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
};

const welcomeText = {
    fontSize : '5rem',
    fontWeight: '100',
    lineHeight: '1.7'
}

const boldText = {
    fontSize : '6rem',
    fontWeight: '300'
}

const slimText = {
    fontSize : '6rem',
    fontWeight: '100'
}

const buttonsDiv = {
    margin: '0 auto',
    marginBottom: '5rem',
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
}

const loginButton = {
    whiteSpace: 'nowrap',
    cursor: 'pointer'
}

const Home = (props) =>{

  const context = useContext(UserContext);
  const {user, setUser} = useContext(UserContext);
  setUser(null);
  const history = useHistory();

  return (
    <div style={HomeLayout}>
        <h1 style={welcomeText}>welcome to <br/> <span style={slimText}>Text</span><span style={boldText}>Net</span><span style={slimText}>!</span></h1>
        <div style={buttonsDiv}>
            <div className="loginBtn" style={loginButton} onClick={() => history.push("/signup")}>Sign up</div>
            <div className="loginBtn" style={loginButton} onClick={() => history.push("/login")}>Login</div>
        </div>
    </div>
  );
}


export default withRouter(Home);