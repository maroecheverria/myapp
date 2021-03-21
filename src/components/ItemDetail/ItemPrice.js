
    import {Card} from 'react-bootstrap';

    const ItemPrice = ({item}) => {
        return (
            <Card.Text>
                <small className="text-muted">
                12 cuotas sin interés de ${(item.price / 12).toFixed(2)}
                </small>
                <br />
                Precio: <strong>${item.price}</strong>
            </Card.Text>
        );
    }

    export default ItemPrice;
