import { Card, Row, ListGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import LinkButton from '../../components/Button/LinkButton';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartContext = useContext(CartContext);

  const handleOnClick = (e, item) => {
    e.preventDefault();
    cartContext.removeItem(item);
  };

  const cartItems = cartContext.cart.map((item) => (
    <ListGroup.Item key={item.id}>
      <img style={{height: '75px', marginLeft: '10px', marginRight: '10px'}} alt={item.title} src={item.imageUrl} />
      <strong>{item.title}:</strong> {`$${item.price} x ${item.quantity}`}
      <Button
        className="m-all-10"
        variant="outline-danger"
        onClick={(e) => handleOnClick(e, item)}
      >
        x
      </Button>
    </ListGroup.Item>
  ));

  return (
    <Row className="mt-20 justify-content-center">
      <Card className="m-all-10" style={{ width: "40rem" }}>
        <Card.Header>MI CARRITO</Card.Header>
        <Card.Body>
          {cartContext.cartLength ? (
            <>
              <ListGroup>{cartItems}</ListGroup>
              <Card.Footer className="text-muted">
                TOTAL: ${cartContext.total}
              </Card.Footer>
              <hr />
              <LinkButton path="/checkout" label="FINALIZAR COMPRA" />
              <LinkButton path="/" label="CONTINUAR COMPRANDO" />
            </>
          ) : (
            <EmptyCart />
          )}
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Cart;
