import axios from 'axios';


const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products`  



export const getProduct = async () => {
    try {

        const response = await axios.get(`${BASE_URL}/`)
        const { data } = response;
       // console.log(data);
        return data;

    } catch (error) {
        console.log(error)

    }
}


export const getProductId = async (id) => {
    try {

        const response = await axios.post(`${BASE_URL}/id`, id)
        const { data } = response;
       // console.log('data respuesta',data);
        return data;

    } catch (error) {
        console.log(error)

    }
}
