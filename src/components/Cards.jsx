import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Alert, Button, CardGroup } from 'react-bootstrap';
//import './Cards.css';
//import { CartProvider } from '../context/CartContext';
function Cards({ data }) {


    return (
        <Row xs={1} md={2} lg={4} >
            {data.detail.map((product) => (
                <Col key={product._id}>
                    <style type="text/css">
                        {`
                    .lila-btn-3 {
                    margin-top: 5px;
                    background-color: #c080d9;
                    border-color: #c080d9;
                    color: white;
                    width : auto ;
                    }

                    .lila-btn-3:hover {
                    background-color: #834aff;
                    border-color: #834aff;

                    }
                                
                                 `}
                    </style>
                    <CardGroup>
                        <Card className='mt-2 mb-5 px-0 card-hover px-2 border-1'>
                            <Link to={`/home/${product._id}`}>
                                <Card.Img variant="top" src={product.img} />
                            </Link>
                            <Card.Body className="text-dark mt-1 mb-1 text-center">
                                <Card.Title> {product.name}</Card.Title>
                                <Card.Text>
                                    Precio $  {product.price}
                                </Card.Text>
                                <Link to={`/home/${product._id}`}>
                                    <Button variant="secondary" className="lila-btn-3" size="sm">
                                        Agregar
                                    </Button>
                                </Link>
                                <Card.Text>
                                    <br />
                                    Stock Disponible: {product.stock}
                                    <br />
                                    <small className="text-dark mt-1 mb-1 text-center"> {product.category.name}</small>
                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <small className="text-dark mt-1 mb-1 text-center">{product.category.name}</small>
                            </Card.Footer> */}
                        </Card>
                    </CardGroup>
                </Col>
            ))}
        </Row >
    );
}

export default Cards;