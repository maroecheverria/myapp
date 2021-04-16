import { Card, Row, ListGroup, Button, Form, InputGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../configs/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendar, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [showOrder, setShowOrder] = useState(false);
  const [validated, setValidated] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  useEffect(() => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    ordersCollection
      .doc(orderId)
      .get()
      .then((doc) => {
        setOrder({ id: doc.id, ...doc.data() });
        setShowOrder(true);
      });
  }, [orderId]);

  const handleOnClick = (e) => {
    setValidated(true);
  };
  return (
    <Row className="mt-20 justify-content-center">
      { showOrder &&
        <>
          <Card className="m-all-10" style={{ width: "40rem" }}>
            <Card.Header>PAGO</Card.Header>
            <Card.Body>
              <Card.Text className="text-muted">
                <strong>NÚMERO DE ORDEN</strong>
              </Card.Text>
              <Card.Text style={{ color: "#28a745" }}>
                <strong>{order.id}</strong>
              </Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  <strong>MONTO:</strong> ${order.total}
                </ListGroup.Item>
              </ListGroup>
              <hr />
              <Form noValidate validated={validated}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="cardNumber"><FontAwesomeIcon icon={faCreditCard} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    placeholder="Número de tarjeta"
                    aria-label="CardNumber"
                    aria-describedby="CardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="cardExpiration"><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    maxLength="5"
                    required
                    placeholder="Fecha de expiración (mm/aa)"
                    aria-label="cardExpiration"
                    aria-describedby="cardExpiration"
                    type="text"
                    value={cardExpiration}
                    onChange={e => setCardExpiration(e.target.value)}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="cardCVV"><FontAwesomeIcon icon={faEyeSlash} /></InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    maxLength="3"
                    required
                    placeholder="CVV"
                    aria-label="cardCVV"
                    aria-describedby="cardCVV"
                    type="password"
                    value={cardCVV}
                    onChange={e => setCardCVV(e.target.value)}
                  />
                </InputGroup>
                <hr />
                <Button onClick={(e) => handleOnClick(e)} className="m-all-10" variant="outline-success">
                  PAGAR
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </>
      }
    </Row>
  );
};

export default Payment;
