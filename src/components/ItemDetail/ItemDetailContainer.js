import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemPrice from '../ItemDetail/ItemPrice';
import ItemDetail from "./ItemDetail";
import mockItems from '../../data/items.jsx';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [showItem, setShowItem] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 2000);
      }).then((result) => {
        setItem(result.filter(x => x.id === parseInt(itemId))[0])
        setShowItem(true);
      });
    }, [itemId]);

    return (
      <Row className="mt-20 d-flex justify-content-center">
        { showItem &&
          <Card className="ml-all-10"  style={{ width: '30rem' }} >
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <ItemPrice item={item} />
                <ItemDetail item={item} />
            </Card.Body>
          </Card>
        }
      </Row>
    );
}

export default ItemDetailContainer;