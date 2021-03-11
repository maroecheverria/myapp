
import { useState } from 'react';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import { Container } from 'react-bootstrap';

const ItemListConainer = ({items}) => {

  const [stockActual, setStockActual] = useState(5);

  const restartStock = (e, quantity) => {
    e.preventDefault();
    if (quantity > stockActual)
      alert("No hay stock suficiente");
    else
      setStockActual((stockActual) => stockActual - quantity);
  };

  return (
    <Container>
      <ItemCount stock={stockActual} initial={1} onAdd={restartStock} />
      <ItemList items={items} />
    </Container>
  );

}

export default ItemListConainer;
