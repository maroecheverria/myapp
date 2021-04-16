import LinkButton from '../../components/Button/LinkButton';
import { Card } from 'react-bootstrap';

const EmptyCart = () => {
  return (
    <>
      <Card.Text className="text-muted">
        NO HAY ELEMENTOS EN EL CARRITO
      </Card.Text>
      <hr />
      <LinkButton path="/" label="VOLVER AL INICIO" />
    </>
  );
};

export default EmptyCart;
