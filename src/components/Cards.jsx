import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import "./Cards.css";
//import { CartProvider } from '../context/CartContext';
function Cards({ data }) {


    return (
        // <div>
        <Row xs={1} md={2} lg={4} >
            {data.detail.map((product) => (
                <Col key={product._id}>
                            <style type="text/css">
                                {`
                                .btn-flat {
                                background-color: purple;
                                color: white;
                                }

                                .btn-xxl {
                                padding: 1rem 1.5rem;
                                font-size: 1.5rem;
                                }
                                `}
                                </style>
                    <Card border="0" className="" style={{ textAlign: 'center', fontSize:'17px' }} >
                        <Card.Header  >
                            <small className="text-dark mt-5">{product.category.name}</small>
                            
                        </Card.Header>
                        <Link to={`/home/${product._id}`}>
                            <Card.Img variant="top" src={product.img} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {/* {product.details} */}
                            </Card.Text>
                            <small className="text-dark" >Precio:  $ {product.price}</small>
                        </Card.Body>
                        <Card.Footer >
                            <Link to={`/home/${product._id}`}>

                                <Button variant='flat' size="sm">
                                    Ver Detalles
                                </Button>

                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>

            ))
            }
        </Row >

    );
}

export default Cards;