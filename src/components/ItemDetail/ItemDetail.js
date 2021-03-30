import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';

const ItemDetail = ({item}) => {
    const cartContext = useContext(CartContext);
    const [stockActual, setStockActual] = useState(item.stock);

    const subtractStock = (e, quantity) => {
        e.preventDefault();
        if (quantity > 0 && quantity <= stockActual) {
            setStockActual((stockActual) => stockActual - quantity);
            cartContext.addToCart({id: item.id, title: item.title, price: item.price, quantity: quantity})
        }
    };

     return (
        <>
            <ListGroup>
                <ListGroup.Item>Stock: <strong>{stockActual}</strong></ListGroup.Item>
                <ListGroup.Item>{item.description}</ListGroup.Item>
            </ListGroup>
            {stockActual > 0 && <ItemCount stock={stockActual} initial={1} onAdd={subtractStock} />}
            { cartContext.cart.length ?
                <Link to="/cart" className="nav-link">
                    <hr /><Button className="m-all-10" variant="outline-success">IR AL CARRITO</Button>
                </Link> : ''
            }
        </>
    );
}

export default ItemDetail;
