
    import {ListGroup} from 'react-bootstrap';

    const ItemDetail = ({item}) => {
        return (
            <ListGroup>
                <ListGroup.Item>${item.price}</ListGroup.Item>
                <ListGroup.Item>{item.description}</ListGroup.Item>
            </ListGroup>
        );
    }

    export default ItemDetail;
