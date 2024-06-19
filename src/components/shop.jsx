
import {useContext,useEffect, useState} from 'react'
import { Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import './shop.css';
import { CartContext } from '../context/CartContext';

const Shopping = () => {
    const { cart } = useContext(CartContext);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (cart.length > 0) {
          setCount(cart.reduce((acc, el) => acc + 1, 0));
        } else {
          setCount(0)
        }
      }, [cart]);
  return (
    <Button variant="primary" className="custom-button position-relative">
      <FaShoppingCart />
      {count > 0 && (
        <Badge pill bg="" className="custom-badge position-absolute top-0 start-100 translate-middle">
          {count}
        </Badge>
      )}
    </Button>
  );
};

// Exporta el componente para que pueda ser utilizado en otras partes de tu aplicación
export default Shopping;
