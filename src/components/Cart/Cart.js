import { Card, Row, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
    const cartContext = useContext(CartContext);
    const cartTotal = cartContext.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartItemsCount = cartContext.cart.length;

    const handleOnClick = (e, item) => {
        e.preventDefault();
        cartContext.removeItem(item);
    };

    const cartItems = cartContext.cart.map((item) => (
        <ListGroup.Item key={item.id}>
            <strong>{`${item.title}:`}</strong> {`$${item.price} x ${item.quantity}`}
            <Button className="m-all-10" variant="outline-danger" onClick={ (e) => handleOnClick(e, item) }>x</Button>
        </ListGroup.Item>)
    );

    return (
        <Row className="mt-20 justify-content-center">
            <Card className="m-all-10"  style={{ width: '40rem' }} >
            <Card.Header>MI CARRITO</Card.Header>
                <Card.Body>
                { cartItemsCount ?
                    <>
                        <ListGroup>
                            {cartItems}
                        </ListGroup>
                        <Card.Footer className="text-muted">
                            TOTAL: ${cartTotal}
                        </Card.Footer>
                        <Link to="/checkout">
                            <hr /><Button className="m-all-10" variant="outline-success">FINALIZAR COMPRA</Button>
                        </Link>
                    </>
                    :
                    <>
                        <Card.Text className="text-muted">
                            NO HAY ELEMENTOS EN EL CARRITO
                        </Card.Text>
                        <Link to="/">
                            <hr /><Button className="m-all-10" variant="outline-success">VOLVER AL INICIO</Button>
                        </Link>
                    </>
                }
                </Card.Body>
            </Card>
        </Row>
    );
};

export default Cart;