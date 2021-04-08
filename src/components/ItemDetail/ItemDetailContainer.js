import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemPrice from '../ItemDetail/ItemPrice';
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../configs/firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
      const db = getFirestore();
      const productsCollection = db.collection("products");

      const product = productsCollection.doc(itemId);

      product.get().then((doc) => {
        setItem({ id: doc.id, ...doc.data() })
        setShowItem(true);
      });
    }, [itemId]);

    return (
      <Row className="mt-20 d-flex justify-content-center">
        { showItem &&
          <Card className="m-all-10 item"  style={{ width: '25rem' }} >
            <Card.Img variant="top" src={item.imageUrl} />
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