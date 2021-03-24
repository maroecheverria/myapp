import { Card, Row, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartItemsCount = cart.length;
    const cartItems = cart.map((item) => (
        <ListGroup.Item>
            <strong>{`${item.title}:`}</strong> {`$${item.price} x ${item.quantity}`}
        </ListGroup.Item>
    ));

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
                        <Link to="#">
                            <Button className="m-all-10" variant="outline-success">FINALIZAR COMPRA</Button>
                        </Link>
                    </>
                    :
                    <Card.Text className="text-muted">
                        NO HAY ELEMENTOS EN EL CARRITO
                    </Card.Text>
                }
                </Card.Body>
            </Card>
        </Row>
    );
};

export default Cart;