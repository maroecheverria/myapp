import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import mockItems from '../../data/items.jsx';

const ItemList = () => {

    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

     useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 2000);
      }).then((result) => { setItems(categoryId ? result.filter((item) => item.categoryId === parseInt(categoryId)) : result); });
    }, [categoryId]);

    return (
        <Row className="mt-20" style={{margin: 'auto'}}>
            { items.map((x, index) => <Item key={index} item={x} />) }
        </Row>
    );
  }
  export default ItemList;