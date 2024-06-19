import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Alert, Button, CardGroup } from 'react-bootstrap';
//import "./Cards.css";
//import { CartProvider } from '../context/CartContext';
function Cards({ data }) {


    return (
        // <div>
        // <Row xs={1} md={2} lg={4} >
        //     {data.detail.map((product) => (
        //         <Col key={product._id}>
        //             <style type="text/css">
        //                 {`
        //                         .btn-flat {
        //                          background-color: #9572ff;
        //                             border-color: #9572ff;
        //                         color: white;
        //                         }

        //                         .btn-xxl {
        //                         padding: 1rem 1.5rem;
        //                         font-size: 1.5rem;
        //                         }
        //                         `}
        //             </style>
        //             <Card border="" className="" style={{ textAlign: 'center', fontSize: '17px' }} >
        //                 <Card.Header  >
        //                     <small className="text-dark mt-3">{product.category.name}</small>

        //                 </Card.Header>
        //                 <Link to={`/home/${product._id}`}>
        //                     <Card.Img variant="top" src={product.img} />
        //                 </Link>
        //                 <Card.Body>
        //                     <Card.Title>{product.name}</Card.Title>
        //                     <Card.Text>
        //                         {/* {product.details} */}
        //                     </Card.Text>
        //                     <small className="text-dark" >Precio:  $ {product.price}</small>
        //                 </Card.Body>
        //                 <Card.Footer >
        //                     <Link to={`/home/${product._id}`}>

        //                         <Button variant='flat' size="sm">
        //                             Ver Detalles
        //                         </Button>

        //                     </Link>
        //                 </Card.Footer>
        //             </Card>
        //         </Col>

        //     ))
        //     }
        // </Row >
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
                        <Card className='mt-2 mb-3'>
                            <Link to={`/home/${product._id}`}>
                                <Card.Img variant="top" src={product.img} />
                            </Link>
                            <Card.Body className="text-dark mt-3 mb-4 text-center">
                                <Card.Title> {product.name}</Card.Title>
                                <Card.Text>
                                    Precio $  {product.price}
                                </Card.Text>
                                <Link to={`/home/${product._id}`}>
                                    <Button variant="secondary" className="lila-btn-3" size="sm">
                                        Ver...
                                    </Button>
                                </Link>
                            </Card.Body>
                            <Card.Footer>
                                {/* <small className="text-center">  Precio ${product.price}</small>
                                 */}
                                <small className="text-dark mt-3 mb-4 text-center">{product.category.name}</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
            ))}
        </Row >
    );
}

export default Cards;