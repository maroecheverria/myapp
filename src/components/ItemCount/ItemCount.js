import { useState } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';

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
        <Row>
            <Col sm={12}>
                <Form inline className="justify-content-center">
                    <FormControl
                        type="number"
                        value={quantity}
                        onChange={ (e) => handleInputChange(e) }
                        className="mr-sm-2 ml-all-10"
                        style={{width: "70px"}}
                    />
                    <Button className="ml-all-10" variant="outline-success" onClick={ (e) => handleOnClick(e, quantity) }>Agregar al carrito</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default ItemCount;