import logo from '../../img/cart.png';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  return <NavLink to="/cart" className="nav-link"><img src={logo} className="Cart-logo" alt="logo" /></NavLink>
}

export default CartWidget;
