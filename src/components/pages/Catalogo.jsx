import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import { Alert, Container } from 'react-bootstrap'
import { getProduct } from '../../services/product'


export const Catalogo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Código del efecto
        const dataProducts = async () => {
            const productData = await getProduct();
            setData(productData);
            console.log(productData)
        }
        dataProducts();
    }, []);


    //console.log('la data1', data);

    if (data && data != '') {
        return (
            <>

                <Container>
                    <Cards data={data} color={"p-2 mb-2  bg-secondary text-white"} />

                </Container>
            </>
        );
    } else {
        // return <>
        // {[

        //     'success',

        // ].map((variant) => (
        //     <Alert key={variant} variant={variant}>
        //         <h4> Cargando..... </h4>
        //     </Alert>
        // ))}
        //  </>
    }



}
