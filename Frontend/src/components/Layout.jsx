import React, {useContext, useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext";
import { withRouter } from 'react-router';

const LayoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 6rem)',
    maxWidth: '1080px', 
    margin: '2rem 2rem',
    padding: '1rem',
    backgroundColor: '#e6e8e6',
    borderRadius: '0.8rem'
}

const LayoutChildrenStyle = {
    width: '100%',
    height: '100%'
}

const CenterWrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
}

const userDivStyle = {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    width: '90%',
    margin: '0 auto',
}

const Layout = (props) => {


    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    const userDiv = <div style={userDivStyle} onClick={() => history.push("/profile")}>
        <p>{user == null? "":user.name}</p>
    </div>;

    return(
        <div style={CenterWrapper}>
            <div style={LayoutStyle} className="shadow">
                <div className="bar topBar">
                    {user && userDiv}
                </div>
                <div className="layoutWrapper" style={LayoutChildrenStyle}>
                    {props.children}
                </div>
                <div className="bar bottomBar">
                    Social Network coded by w1zard
                </div>
            </div>
        </div>
    );   
}


export default Layout;