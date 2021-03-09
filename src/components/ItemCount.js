import { useState } from 'react';
import { Form, FormControl, Button, Badge, Container, Row, Col } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {

   const [quantity, setQuantity] = useState(1);

    return(
        <Container>
            <Row>
            <Col sm={2}>
                <h2>Stock<Badge variant="info">{stock}</Badge></h2>
            </Col>
            <Col sm={10}>
                <Form inline>
                    <FormControl
                        type="number"
                        value={quantity}
                        onChange={ e => setQuantity(e.target.value) }
                        placeholder={ initial }
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success" onClick={ (e) => onAdd(e, quantity) }>Agregar al carrito</Button>
                </Form>
            </Col>
            </Row>
        </Container>
    );
};

export default ItemCount;