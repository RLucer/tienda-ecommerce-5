import {useContext,useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext'

export const CountProduct = () => {
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
    <div>{count}</div>
  )
}
