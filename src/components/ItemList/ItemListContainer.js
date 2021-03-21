import { Row } from 'react-bootstrap';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <Row className="mt-20 d-flex justify-content-center">
      <ItemList />
    </Row>
  );
}

export default ItemListContainer;
