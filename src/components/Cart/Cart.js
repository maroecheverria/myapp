import { Card, Row, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getFirestore } from "../../configs/firebase";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const db = getFirestore();
  const orders = db.collection("orders");

  const handleOnClick = (e, item) => {
    e.preventDefault();
    cartContext.removeItem(item);
  };

  const handleOnClickCheckout = (e) => {
    orders
      .add({
        buyer: {
          name: "Jose",
          phone: "1551128721",
          email: "maro.echeverria@gmail.com",
        },
        items: [],
        total: cartContext.total,
      })
      .then((docRef) => {
        cartContext.createOrder(docRef.id)
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const cartItems = cartContext.cart.map((item) => (
    <ListGroup.Item key={item.id}>
      <strong>{`${item.title}:`}</strong> {`$${item.price} x ${item.quantity} (${item.id})`}
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
            <>
              <ListGroup>{cartItems}</ListGroup>
              <Card.Footer className="text-muted">
                TOTAL: ${cartContext.total}
              </Card.Footer>
              <Link to="/checkout">
                <hr />
                <Button
                  onClick={(e) => handleOnClickCheckout(e)}
                  className="m-all-10"
                  variant="outline-success"
                >
                  FINALIZAR COMPRA
                </Button>
              </Link>
            </>
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
