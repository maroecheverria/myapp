import { Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const AlertDismissibleExample = ({error}) => {
    const [show, setShow] = useState(error);

    useEffect(() => {
        setShow(error);
    }, [error]);

    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Error</Alert.Heading>
          <p>
            No hay stock suficiente de este producto
          </p>
        </Alert>
      );
    } else {
        return null;
    }
};

export default AlertDismissibleExample;