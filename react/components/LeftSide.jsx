import React from 'react'

import Button from './Button'

import { loginStore, LoginActions } from '../app.loginstore'

const LeftSide = () => {
    
    const login = () => {
        let loggedIn = loginStore.getState().loginStatus;
        if(loggedIn) {
            alert("Login!")
        }
        LoginActions.dispatchChangeLogin(!loggedIn)
        
        console.log("leftside logged ", loggedIn)
    }
    let text = "Login"
    if(loginStore.getState().loginStatus){
        text = "Login"
    }
    else {
        text = "Logout"
    }
    return(
        <div className="leftSide">
            <Button type="submit" text={text} onClick={login}/>
        </div>
    )
}

export default LeftSide