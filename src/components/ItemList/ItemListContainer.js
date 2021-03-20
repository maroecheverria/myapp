import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';
import mockItems from '../../data/items.jsx';

const ItemListContainer = () => {

  const [stockActual, setStockActual] = useState(5);
  const [items, setItems] = useState([]);

     useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockItems);
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
      <Row className="mt-20">
          <Col sm={12} className="text-start">
              <h2>Productos Destacados</h2>
          </Col>
      </Row>
      <ItemList items={items} />
    </Container>
  );

}

export default ItemListContainer;
