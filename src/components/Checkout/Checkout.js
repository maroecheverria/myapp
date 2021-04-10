import { Card, Row, ListGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Checkout = () => {
  const cartContext = useContext(CartContext);

  return (
    <Row className="mt-20 justify-content-center">
        <Card className="m-all-10" style={{ width: "40rem" }}>
          <Card.Header>FINALIZAR COMPRA</Card.Header>
          <Card.Body>
          <Card.Text className="text-muted">
              <strong>NÚMERO DE ORDEN</strong>
          </Card.Text>
          <Card.Text style={{color: '#28a745'}}>
              <strong>{cartContext.order.id}</strong>
          </Card.Text>
          <ListGroup>
              <ListGroup.Item><strong>TOTAL:</strong> ${cartContext.total}</ListGroup.Item>
              <ListGroup.Item><strong>ITEMS:</strong> {cartContext.totalItems}</ListGroup.Item>
          </ListGroup>
            <hr />
            <Button className="m-all-10" variant="outline-success">
              IR AL PAGO
            </Button>
          </Card.Body>
        </Card>
    </Row>
  );
};

export default Checkout;
