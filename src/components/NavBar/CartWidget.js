import logo from '../../img/cart.png';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return <Link to="/cart" className="nav-link"><img src={logo} className="Cart-logo" alt="logo" /></Link>
}

export default CartWidget;
