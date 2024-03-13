import { Outlet, Navigate } from 'react-router-dom'
import {LoginContext} from './LoginContext';
import { useContext } from "react";


const useAuth=() =>{
 //   const user = useContext(LoginContext)
 const HOUR = 1000 * 60 * 60;
 const anHourAgo = Date.now() - HOUR;
 return localStorage.loginDate>anHourAgo

 //   return user && user.loggedIn
}


const PrivateRoutes = () => {
    let auth = {'token':useAuth()}
    return(
        auth.token ? <Outlet/> : <Navigate to=""/>
    )
}

export default PrivateRoutes