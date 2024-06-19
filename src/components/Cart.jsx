import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import { Button,Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';
//import Alert from 'react-bootstrap/Alert';



export const Cart = () => {

  initMercadoPago((`${import.meta.env.VITE_API_KEY_MERCADOPAGO}`), {
    locale: "es-CL",
  });

  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);


  const [total, setTotal] = useState(0);
  const [preferenceId, setPreferenceId] = useState(null)

  const removeFromCart = (index) => {
    const newCartItems = [...cart];
    newCartItems.splice(index, 1);
    setCart(newCartItems);
  };

  // const handleBuy = async () => {
  //   if (total > 0) {
  //     const id = await createPreference();
  //     if (id) {
  //       setPreferenceId(id);
  //     }
  //   }
  // };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cart.reduce((acc, el) => acc + el.detail.price, 0));
      if (total > 0) {
        
        handleBuy();
      }
    } else {
      setTotal(0);
    }




  },[cart,total] );












  const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/mercadopago`

  const createPreference = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/`, {
        title: "Pedido N°125412",
        quantity: 1,
        price: total,
      });

      const { id } = response.data;
      return id;

    } catch (error) {
      console.log(error)
    }
  }





  return cart.length > 0 ? (
    <Container>
      <Row>
        <Col>
          <div className="shopping-cart">
            <div className='text-center'><h4>Carro de Compras</h4></div>

            <hr />
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span>{item.detail.name}</span>  <span> $ {item.detail.price}</span>
                  <Button variant='outline-light' onClick={() => removeFromCart(index)}>❌</Button>
                </li>
              ))}
            </ul>
            <hr />
            <div className='text-center'><h5>Total:   $ {total}</h5></div>
          </div>
        </Col>

        <Col>
          <Card style={{ width: '100%', border: '0' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Elige un medio de pago disponible</Card.Title>
              <Card.Text >

              </Card.Text>
            
              {/* {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}  */}

             {/* { total > 0 ? (preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />):(<>nada</>) } */}



              {user ? (preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />) : (<>
                {[
                  'warning',
                ].map((variant) => (
                  <Alert key={variant} variant={variant}>
                    Para poder pagar tu pedido debes estar registrado.
                    <Alert.Link href="/sesion"> Registrarte!!  ó  Inicia Sesion</Alert.Link>   Gracias!!!
                  </Alert>
                ))}
              </>)}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >





  ) : (
    <h2>Tu carrito está vacío...</h2>
  );
};
