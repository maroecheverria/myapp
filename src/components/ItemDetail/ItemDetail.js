import { ListGroup } from "react-bootstrap";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
import LinkButton from "../../components/Button/LinkButton";

const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext);
  const [stockActual, setStockActual] = useState(item.stock);

  const subtractStock = (e, quantity) => {
    e.preventDefault();
    if (quantity > 0 && quantity <= stockActual) {
      setStockActual((stockActual) => stockActual - quantity);
      cartContext.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: quantity,
        imageUrl: item.imageUrl
      });
    }
  };

  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          Stock: <strong>{stockActual}</strong>
        </ListGroup.Item>
        <ListGroup.Item>{item.description}</ListGroup.Item>
      </ListGroup>
      {stockActual > 0 && (
        <ItemCount stock={stockActual} initial={1} onAdd={subtractStock} />
      )}
      {cartContext.cartLength ? (
        <>
          <hr />
          <LinkButton path="/cart" label="IR AL CARRITO" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemDetail;
