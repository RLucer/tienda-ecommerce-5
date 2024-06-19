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
 
.lila-btn-3 {
  background-color: #9572ff;
  border-color: #9572ff;
  color: white;
    width : 100%;
}

.lila-btn-3:hover {
  background-color: #834aff;
  border-color: #834aff;
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
                                <Container className="my-3">
                                    <Row>
                                        <Col xs={12} sm={4} className="mb-3">
                                            <Button variant="secondary" className="lila-btn-3" onClick={() => buyProducts(data)}>
                                                Agregar
                                            </Button>
                                        </Col>
                                        <Col xs={12} sm={4} className="mb-3">
                                            <Button variant="secondary" className="lila-btn-3" onClick={continueCart}>
                                                Ir al Carro
                                            </Button>
                                        </Col>
                                        <Col xs={12} sm={4} className="mb-3">
                                            <Button variant="secondary" className="lila-btn-3" onClick={continueShopping}>
                                                Seguir
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
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
