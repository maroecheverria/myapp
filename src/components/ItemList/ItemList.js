import { Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({items}) => {

    return (
        <>
            <Row className="mt-20">
                <Col sm={12} className="text-start">
                    <h2>Lista de Productos</h2>
                </Col>
            </Row>
            <Row style={{margin: 'auto'}}>
                { items.map((x, index) => <Item key={index} item={x} />) }
            </Row>
        </>
    );
  }
  export default ItemList;