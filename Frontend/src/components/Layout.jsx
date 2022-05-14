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

const Layout = (props) => {


    return(
        <div style={CenterWrapper}>
            <div style={LayoutStyle} className="shadow">
                <div className="bar topBar">
                    
                </div>
                <div style={LayoutChildrenStyle}>
                    {props.children}
                </div>
                <div className="bar bottomBar">
                    Social Network coded by w1zard
                </div>
            </div>
        </div>
    );   
}


export default withRouter(Layout)