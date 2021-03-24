import { Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import ItemPrice from '../ItemDetail/ItemPrice';

const Item = ({item}) => {
    return (
      <Link to={`/item/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <Card className="m-all-10 item" style={{ width: '16rem' }} >
          <Card.Img variant="top" src={item.pictureUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
              <ItemPrice item={item} />
          </Card.Body>
        </Card>
      </Link>
      );
}

export default Item;