import React, {useContext} from "react"
import Layout from '../components/Layout'
import { UserContext } from "../UserContext"
import Title from 'reactjs-title'
import { useHistory } from "react-router-dom";

const HomeLayout = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
};

const headerText = {
    fontSize : '4rem',
    fontWeight: '100',
    lineHeight: '1.7'
}

const boldText = {
    fontSize : '4rem',
    fontWeight: '300'
}


const buttonsDiv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
}

const loginButton = {
    whiteSpace: 'nowrap',
    cursor: 'pointer'
}

const formsWrapper = {
    fontSize: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
}


const label = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
}

const labelText = {
    width: '25%',
}

const input = {
    borderRadius: '0.5rem',
    fontSize: '1.75rem',
}

const Signup = (props) =>{

  const context = useContext(UserContext);
  const {user, setUser} = useContext(UserContext);
  setUser(null);
  const history = useHistory();

  return (
    <div style={HomeLayout}>
        <h1 style={headerText}>sign up for Text<span style={boldText}>Net</span></h1>

        <form style={formsWrapper}>
            <label style={label}>
                <p style={labelText}>first name</p>
                
                <input className="loginInput" style={input} type="text" name="name" />
            </label>

            <label style={label}>
                <p style={labelText}>last name</p>
                <input className="loginInput" style={input} type="text" name="name" />
            </label>

            <label style={label}>
                <p style={labelText}>password</p>
                <input className="loginInput" style={input} type="password" name="name" />
            </label>

            <label style={label}>
                <p style={labelText}>confirm</p>
                <input className="loginInput" style={input} type="password" name="name" />
            </label>
        </form>

        <div style={buttonsDiv}>
            <div className="loginBtn" style={loginButton} onClick={() => history.push("/signup")}>Sign up</div>
        </div>
    </div>
  );
}


export default Signup;