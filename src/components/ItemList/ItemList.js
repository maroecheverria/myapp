import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { getFirestore } from "../../configs/firebase";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("products");

    const products = categoryId
      ? productsCollection.where("categoryId", "==", parseInt(categoryId))
      : productsCollection;

    products
      .limit(20)
      .get()
      .then((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, [categoryId]);

  return (
    <Row className="mt-20" style={{ margin: "auto" }}>
      {items.map((x, index) => (
        <Item key={index} item={x} />
      ))}
    </Row>
  );
};
export default ItemList;
