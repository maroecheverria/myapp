import { Card, Row, Form, ListGroup, Button, InputGroup } from 'react-bootstrap';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import firebase from 'firebase/app';
import { getFirestore } from '../../configs/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons'
import EmptyCart from '../Cart/EmptyCart';

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const db = getFirestore();
  const orders = db.collection("orders");
  const [validated, setValidated] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerConfirmEmail, setCustomerConfirmEmail] = useState('');
  const [customerErrorEmail, setCustomerErrorEmail] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerDocument, setCustomerDocument] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleOnClick = (e) => {
    setValidated(true);
    if (customerEmail !== customerConfirmEmail) {
      e.preventDefault();
      e.stopPropagation();
      setCustomerErrorEmail(true);
    }
    else if (e.currentTarget.form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      orders
        .add({
          buyer: {
            email: customerEmail,
            name: customerName,
            document: customerDocument,
            phone: customerPhone,
          },
          items: cartContext.cart.map((item) => (
            {id: item.id, title: item.title, price: item.price, quantity: item.quantity}
            )),
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total: cartContext.total,
        })
        .then((docRef) => {
          window.location.href = `../payment/${docRef.id}`;
        })
        .catch((error) => {
          console.error("Error adding order: ", error);
        });
        e.preventDefault();
    }
  };

  return (
    <Row className="mt-20 justify-content-center">
        <Card className="m-all-10" style={{ width: "40rem" }}>
          <Card.Header>FINALIZAR COMPRA</Card.Header>
          <Card.Body>
            {cartContext.cartLength ? (
              <>
            <Card.Text className="text-muted text-start" >
              DATOS PERSONALES
            </Card.Text>
            <Form noValidate validated={validated}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="customerEmail"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className={customerErrorEmail ? 'error' : ''}
                  required
                  placeholder="Email"
                  aria-label="customerEmail"
                  aria-describedby="customerEmail"
                  type="email"
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="customerConfirmEmail"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className={customerErrorEmail ? 'error' : ''}
                  required
                  placeholder="Confirmar Email"
                  aria-label="customerConfirmEmail"
                  aria-describedby="customerConfirmEmail"
                  type="email"
                  value={customerConfirmEmail}
                  onChange={e => setCustomerConfirmEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="customerName"><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  required
                  placeholder="Nombre y Apellido"
                  aria-label="customerName"
                  aria-describedby="customerName"
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="customerDocument"><FontAwesomeIcon icon={faIdCard} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  required
                  placeholder="DNI"
                  aria-label="customerDocument"
                  aria-describedby="customerDocument"
                  type="text"
                  value={customerDocument}
                  onChange={e => setCustomerDocument(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="customerPhone"><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  required
                  placeholder="Teléfono"
                  aria-label="customerPhone"
                  aria-describedby="customerPhone"
                  type="text"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                />
              </InputGroup>
              <hr />
              <Card.Text className="text-muted" >
                RESUMEN DE COMPRA
              </Card.Text>
              <ListGroup>
                  <ListGroup.Item><strong>TOTAL:</strong> ${cartContext.total}</ListGroup.Item>
                  <ListGroup.Item><strong>ITEMS:</strong> {cartContext.cartLength}</ListGroup.Item>
              </ListGroup>
              <hr />
              <Button
                onClick={(e) => handleOnClick(e)}
                className="m-all-10"
                variant="outline-success"
              >
                CONFIRMAR DATOS
              </Button>
            </Form>
            </>
            ) : (
              <EmptyCart />
            )}
          </Card.Body>
        </Card>
    </Row>
  );
};

export default Checkout;
