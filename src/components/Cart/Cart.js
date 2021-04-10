import { Card, Row, Form, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { getFirestore } from '../../configs/firebase';
import firebase from 'firebase/app';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const db = getFirestore();
  const orders = db.collection("orders");
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const handleOnClick = (e, item) => {
    e.preventDefault();
    cartContext.removeItem(item);
  };

  const handleOnClickCheckout = (e) => {
    setValidated(true);
    if (e.currentTarget.form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      orders
        .add({
          buyer: {
            name: customerName,
            phone: customerPhone,
            email: customerEmail,
          },
          items: cartContext.cart.map((item) => (
            {id: item.id, title: item.title, price: item.price, quantity: item.quantity}
            )),
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total: cartContext.total,
        })
        .then((docRef) => {
          cartContext.createOrder(docRef.id)
        })
        .catch((error) => {
          console.error("Error adding order: ", error);
        });
    }
  };

  const cartItems = cartContext.cart.map((item) => (
    <ListGroup.Item key={item.id}>
      <strong>{`${item.title}:`}</strong> {`$${item.price} x ${item.quantity}`}
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
          {cartContext.totalItems ? (
            <Form noValidate validated={validated}>
              <Form.Group className="text-left" controlId="validationName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="text-left" controlId="validationPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su teléfono"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="text-left" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Ingrese su email"
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                />
              </Form.Group>
              <ListGroup>{cartItems}</ListGroup>
              <Card.Footer className="text-muted">
                TOTAL: ${cartContext.total}
              </Card.Footer>
              <Link to="/checkout">
                <hr />
                <Button
                  type="submit"
                  onClick={(e) => handleOnClickCheckout(e)}
                  className="m-all-10"
                  variant="outline-success"
                >
                  FINALIZAR COMPRA
                </Button>
              </Link>
            </Form>
          ) : (
            <>
              <Card.Text className="text-muted">
                NO HAY ELEMENTOS EN EL CARRITO
              </Card.Text>
              <Link to="/">
                <hr />
                <Button className="m-all-10" variant="outline-success">
                  VOLVER AL INICIO
                </Button>
              </Link>
            </>
          )}
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Cart;
