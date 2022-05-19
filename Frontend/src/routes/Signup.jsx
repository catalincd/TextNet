import React, {useContext, useEffect, useState} from "react"
import Layout from '../components/Layout'
import { UserContext } from "../UserContext"
import Title from 'reactjs-title'
import { useHistory } from "react-router-dom";
import { FaPassport } from "react-icons/fa";

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
    marginTop: '3rem',
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

const errorMsg = {
    color: "red",
}

const Signup = (props) =>{

  const context = useContext(UserContext);
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [errorText, setErrorText] = useState("");

  
  useEffect(() => {
    fetch(`http://localhost:8000/userExists?name=${username}`, {method: "POST"})
        .then(response => response.json())
        .then(data => {
          setErrorText(data.exists? `Username ${username} is already registered` :  "")
        });
  });


  const handleSubmit = (event) =>{
        event.preventDefault()
        const user = event.target.username.value;
        const pass = event.target.password.value;
        const confirm = event.target.passwordConfirm.value;

        if(user.length < 3){
            setErrorText("Username has to be at least 3 characters")
            return
        }

        if(pass.length < 3){
            setErrorText("Password has to be at least 3 characters")
            return
        }
        
        if(confirm != pass){
            setErrorText("Passwords don't match")
            return
        }


        fetch(`http://localhost:8000/createUser?name=${username}&pass=${pass}`, {method: "POST"})
        .then(response => response.json())
        .then(data => {
          if(data.status){
            setErrorText(null);
            setUser({name: username, pic: 'default.jpg'});
            history.push("/dashboard");
          }
          else{
            setErrorText("Error")
          }
        });
  }

  return (
    <div style={HomeLayout}>
        <h1 style={headerText}>sign up for Text<span style={boldText}>Net</span></h1>

        <form style={formsWrapper} onSubmit={handleSubmit}>
            <label style={label}>
                <p style={labelText}>username</p>
                <input className="loginInput" style={input} type="text" name="username" onChange={event => setUsername(event.target.value)}/>
            </label>

            <label style={label}>
                <p style={labelText}>password</p>
                <input className="loginInput" style={input} type="password" name="password" />
            </label>

            <label style={label}>
                <p style={labelText}>confirm</p>
                <input className="loginInput" style={input} type="password" name="passwordConfirm" />
            </label>

            <h5 style={errorMsg}>{errorText}</h5>

            <div style={buttonsDiv}>
                <input className="loginBtn" style={loginButton} type="submit" name="signup" value="Sign up"/>
            </div>
            
        </form>
        
    </div>
  );
}


export default Signup;