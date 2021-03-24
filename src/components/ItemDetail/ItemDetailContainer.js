import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemPrice from '../ItemDetail/ItemPrice';
import ItemDetail from "./ItemDetail";
import mockItems from '../../data/items.jsx';

const ItemDetailContainer = ({addToCart, cart}) => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 2000);
      }).then((result) => {
        const i = result.filter(x => x.id === parseInt(itemId))[0];
        setItem(i)
        setShowItem(true);
      });
    }, [itemId]);

    return (
      <Row className="mt-20 d-flex justify-content-center">
        { showItem &&
          <Card className="m-all-10 item"  style={{ width: '25rem' }} >
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <ItemPrice item={item} />
                <ItemDetail item={item} addToCart={addToCart} cart={cart} />
            </Card.Body>
          </Card>
        }
      </Row>
    );
}

export default ItemDetailContainer;