import { useState } from 'react';
import { Form, FormControl, Button, Badge, Row, Col } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {

   const [quantity, setQuantity] = useState(initial);

   const handleInputChange = (e) => {
    const q = e.target.value;

    if ( q > 0 && q <= stock) {
        setQuantity(q);
    }
   };

   const handleOnClick = (e, q) => {
    onAdd(e, q);
    setQuantity(1);
   };

    return(
        <Row className="mt-10">
            <Col sm={6} className="text-start">
                <h2>Stock<Badge variant="info" className="ml-10">{stock}</Badge></h2>
            </Col>
            <Col sm={6}>
                <Form inline className="float-sm-right">
                    <FormControl
                        type="number"
                        value={quantity}
                        onChange={ (e) => handleInputChange(e) }
                        className="mr-sm-2"
                    />
                    <Button variant="outline-success" onClick={ (e) => handleOnClick(e, quantity) }>Agregar al carrito</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default ItemCount;