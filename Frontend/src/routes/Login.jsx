import React, {useContext, useState, useEffect} from "react"
import { UserContext } from "../UserContext"
import { useHistory } from "react-router-dom";
import { useFetch } from '../useFetch'

import Form from '../components/Form'
import SHA256 from 'js-sha256'

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

const Login = (props) =>{

  const [errorMessage, setErrorMessage] = useState(null);
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [errorText, setErrorText] = useState(null);



  const handleSubmit = (event) =>{
        event.preventDefault()
        const user = event.target.username.value;
        const pass = event.target.password.value;

        if(user.length < 3){
            setErrorText("Username has to be at least 3 characters")
            return
        }

        if(pass.length < 3){
            setErrorText("Password has to be at least 3 characters")
            return
        }
        

        fetch(`http://localhost:8000/loginUser?name=${username}&pass=${pass}`, {method: "POST"})
        .then(response => response.json())
        .then(data => {
          if(data.status && data.success){
            console.log(data);
            setErrorText(null);
            setUser({name: username, pic: data.picture});
            history.push("/dashboard");
          }
          else{
            console.log("failed")
            setErrorText("Error")
          }
        });
  }

  return (
    <div style={HomeLayout}>
        <h1 style={headerText}>log in Text<span style={boldText}>Net</span></h1>

        <form style={formsWrapper} onSubmit={handleSubmit}>
            <label style={label}>
                <p style={labelText}>username</p>
                <input className="loginInput" style={input} type="text" name="username" onChange={event => setUsername(event.target.value)}/>
            </label>

            <label style={label}>
                <p style={labelText}>password</p>
                <input className="loginInput" style={input} type="password" name="password" />
            </label>

            <h5 style={errorMsg}>{errorText}</h5>

            <div style={buttonsDiv}>
                <input className="loginBtn" style={loginButton} type="submit" name="login" value="Log in"/>
            </div>
            
        </form>
        
    </div>
  );
}


export default Login;