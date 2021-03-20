import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import mockItems from '../../data/items.jsx';

const ItemList = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

     useEffect(() => {
      //Simulate API request, only once
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockItems);
        }, 2000);
      }).then((result) => { return setItems(id ? result.filter((item) => item.categoryId === parseInt(id)) : result); });
    }, [id]);

    return (
        <Container>
            <Row style={{margin: 'auto'}}>
                { items.map((x, index) => <Item key={index} item={x} />) }
            </Row>
        </Container>
    );
  }
  export default ItemList;