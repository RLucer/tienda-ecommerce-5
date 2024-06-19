import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/users`  // https://express-rest-api-three.vercel.app/v1/users


export const login = async (user) => {  // user representa los campos email y password que vienen esde el formulario
    try {
        const response = await axios.post(`${BASE_URL}/login`, user)  // https://express-rest-api-three.vercel.app/v1/users/login
        const { data } = response;
        //console.log(data);
        return data;
    } catch (error) {
        console.log('error')
    }
}

export const signup = async(user) => {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, user) // https://express-rest-api-three.vercel.app/v1/users/signup
        const { data } = response;
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const logoutUser = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //     // setAuthToken(false);
//     // dispatch(setCurrentUser({}));

}