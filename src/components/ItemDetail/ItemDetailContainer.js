import { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemPrice from '../ItemDetail/ItemPrice';
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../configs/firebase";
import LinkButton from "../../components/Button/LinkButton";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
      const db = getFirestore();
      const productsCollection = db.collection("products");

      productsCollection.doc(itemId).get().then((doc) => {
        setItem({ id: doc.id, ...doc.data() })
        setShowItem(true);
      });
    }, [itemId]);

    return (
      <Row className="mt-20 d-flex justify-content-center">
        { showItem &&
        <>
          <Card className="m-all-10 item"  style={{ width: '25rem' }} >
            <div style={{textAlign: 'left'}}><LinkButton path={`/category/${item.categoryId}`} label="VOLVER" /></div>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
                <ItemPrice item={item} />
                <ItemDetail item={item} />
            </Card.Body>
          </Card>
        </>
        }
      </Row>
    );
}

export default ItemDetailContainer;