
import { useState } from 'react';
import ItemCount from '../components/ItemCount'

const ItemListConainer = () => {

  const [stockActual, setStockActual] = useState(5);

  const restartStock = (e, quantity) => {
    e.preventDefault();
    if (quantity > stockActual)
      alert("No hay stock suficiente");
    else
      setStockActual((stockActual) => stockActual - quantity);
  };

  return (<ItemCount stock={stockActual} initial={1} onAdd={restartStock} />);

}

export default ItemListConainer;
