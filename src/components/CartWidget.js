
import { Component } from 'react';
import logo from '../cart.png';

class CartWidget extends Component {
  render() {
    return (
      <img src={logo} className="Cart-logo" alt="logo" />
    )
  }
}

export default CartWidget;
