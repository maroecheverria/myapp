import { Card } from 'react-bootstrap';
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";

const Item = ({item}) => {

    return (
      <Card className="ml-all-10" style={{ width: '16rem' }} >
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
            <ItemDetailContainer item={item} />
        </Card.Body>
      </Card>
      );
}

export default Item;