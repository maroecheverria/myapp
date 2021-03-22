
    import {ListGroup} from 'react-bootstrap';

    const ItemDetail = ({item, stock}) => {
        return (
            <ListGroup>
                <ListGroup.Item>Stock: <strong>{stock}</strong></ListGroup.Item>
                <ListGroup.Item>{item.description}</ListGroup.Item>
            </ListGroup>
        );
    }

    export default ItemDetail;
