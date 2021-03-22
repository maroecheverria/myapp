import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemPrice from '../ItemDetail/ItemPrice';
import ItemDetail from "./ItemDetail";
import ItemCount from '../ItemCount/ItemCount';
import mockItems from '../../data/items.jsx';
import AlertDismissibleExample from '../Alert/AlertDismissible';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [stockActual, setStockActual] = useState();
    const [showItem, setShowItem] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 2000);
      }).then((result) => {
        const i = result.filter(x => x.id === parseInt(itemId))[0];
        setItem(i)
        setStockActual(i.stock);
        setShowItem(true);
      });
    }, [itemId]);

    const subtractStock = (e, quantity) => {
      e.preventDefault();
      if (quantity > 0 && quantity > stockActual) {
        setError(true);
      }
      else
        setStockActual((stockActual) => stockActual - quantity);
    };

    return (
      <Row className="mt-20 d-flex justify-content-center">
        { showItem &&
          <Card className="ml-all-10"  style={{ width: '25rem' }} >
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <ItemPrice item={item} />
                <ItemDetail item={item} stock={stockActual} />
            </Card.Body>
            <ItemCount stock={stockActual} initial={1} onAdd={subtractStock} />
            <AlertDismissibleExample style={{marginBottom: '0px'}} error={error} />
          </Card>
        }
      </Row>
    );
}

export default ItemDetailContainer;