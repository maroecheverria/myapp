import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';

//Frutas
import manzana from '../../img/products/manzana.jpg';
import pera from '../../img/products/pera.jpg';
import banana from '../../img/products/banana.jpg';
import uva from '../../img/products/uva.jpg';

const ItemListConainer = () => {

  const [stockActual, setStockActual] = useState(5);
  const [items, setItems] = useState([]);

     useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {id: 1, title: 'Manzana', pictureUrl: manzana},
            {id: 2, title: 'Pera', pictureUrl: pera},
            {id: 3, title: 'Banana', pictureUrl: banana},
            {id: 4, title: 'Uva', pictureUrl: uva},
          ]);
        }, 2000);
      }).then((result) => { return setItems(result); });
    }, []);

  const subtractStock = (e, quantity) => {
    e.preventDefault();
    if (quantity > 0 && quantity > stockActual)
      alert("No hay stock suficiente");
    else
      setStockActual((stockActual) => stockActual - quantity);
  };

  return (
    <Container>
      <ItemCount stock={stockActual} initial={1} onAdd={subtractStock} />
      <ItemList items={items} />
    </Container>
  );

}

export default ItemListConainer;
