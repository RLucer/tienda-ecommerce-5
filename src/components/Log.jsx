import  { useContext, useEffect } from 'react'
import { logoutUser } from '../services/user'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom';

export const Log = () => {

    const { user, setToken, setUser } = useContext(UserContext);


    useEffect(() => {

        const closeSesion = async () => {

           logoutUser();//para borrarlo del localstorage
           setUser(''); //borro el user del contex
           setToken('')
        }  
        closeSesion();
    }, []);


    return <Navigate to="/home" />;
}


