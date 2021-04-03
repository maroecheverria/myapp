import logo from '../../img/cart.png';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

  const cartContext = useContext(CartContext);
  const cartItemsCount = cartContext.cart.length;

  return (
    <Link to="/cart" className="nav-link"><img src={logo} className="Cart-logo" alt="logo" />
        <Badge pill variant="info">{cartItemsCount}</Badge>
    </Link>
  )
}

export default CartWidget;
