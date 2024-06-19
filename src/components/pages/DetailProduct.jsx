import { useContext, useEffect, useState } from 'react'
import { getProductId } from "../../services/product";
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


export function DetailProduct() {


    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const dataProductsId = async () => {
            const productData = await getProductId({ id });
            setData(productData);
        }
        dataProductsId();
    }, []);


    const { cart, setCart } = useContext(CartContext)



    const buyProducts = (data) => {
        setCart([...cart, data])
    }
    const continueShopping = () => {
        navigate('/');
    };
    const continueCart = () => {
        navigate('/cart');
    };
    if (data && data != '') {
        return (
            <>
            <style type="text/css">
                                {`
                                .btn-flat {
                                background-color: purple;
                                color: white;
                                }
                                  .btn-flat2 {
                                background-color: #9166af;
                                color: white;
                                }
                                  .btn-flat3 {
                                background-color: #E0B0FF;
                                color: white;
                                }

                                .btn-xxl {
                                padding: 1rem 1.5rem;
                                font-size: 1.5rem;
                                }
                                `}
                                </style>
                <Container>
                    <Row><h2>   {data.detail.name}</h2>
                        <br /><br />
                    </Row>
                    <Row>

                        <Col sm={7}>
                            <img
                                className="d-block w-auto"
                                src={data.detail.img}
                                width="400px"
                                height="400px"
                            />
                        </Col>
                        <Col sm={5}>
                            <Col><br /></Col>
                            <h4>Descripción</h4>
                            <hr />
                            <Col className='mt-3 mb-3'>
                                {data.detail.details}
                            </Col >
                            <Col>
                                <br /><br />
                                <hr />
                                <h4>Precio $ {data.detail.price}</h4>
                                <hr />
                                <br /><br />

                            </Col>
                            <Col>
                                <Row className='mt-5 mb-5 '>
                                    <div >
                                        <Button variant="flat" onClick={() => buyProducts(data)}>Agregar al Carro</Button>
                                        <Button variant="flat2" onClick={continueCart}>Ir al Carro</Button>
                                        <Button variant="flat3" onClick={continueShopping}>Seguir Comprando</Button>
                                    </div>

                                    <Col sm={4}></Col>

                                    <Col sm={4}></Col>

                                </Row>
                            </Col>
                        </Col>


                    </Row>

                    <Row className='mt-5'>

                        <Col>"otra imagen "</Col>
                        <Col>"otra imagen "</Col>
                        <Col>"otra imagen "</Col>
                    </Row>




                </Container>

            </>
        );
    } else {
        // return <>
        //     {[

        //         'success',

        //     ].map((variant) => (
        //         <Alert key={variant} variant={variant}>
        //             <h4> Cargando..... </h4>
        //         </Alert>
        //     ))}
        // </>
    }


}
