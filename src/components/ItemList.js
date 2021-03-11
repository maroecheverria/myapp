import Item from '../components/Item';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({items}) => {

    return (
        <>
            <Row className="mt-10">
                <Col sm={12} className="text-start">
                    <h2>Lista de Productos</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="text-start">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio ($)</th>
                            <th scope="col">Imágen</th>
                            </tr>
                        </thead>
                        <tbody>
                            { items.map((x, index) => <Item key={index} item={x} />) }
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    );
  }
  export default ItemList;