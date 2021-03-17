import { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import ItemDetail from "./ItemDetail";

//Fruta
import manzana from '../../img/products/manzana.jpg';

const ItemDetailContainer = ({item}) => {
    const [itemMock, setItemMock] = useState({});
    const [open, setOpen] = useState(false);

    const handleOnClick = (e) => {
      if (!open) {
        //Simulate API request
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              {id: 1, title: 'Manzana', price: 80, stock: 20, description: "Producto proveniente de huertas sustentables, sin insecticidas.", pictureUrl: manzana}
            );
          }, 2000);
        }).then((result) => {
          setItemMock(result);
          setOpen(!open);
        });
      } else {
        setOpen(!open);
      }
    };

    return (
      <div>
        <Button
          className="mb-10"
          variant="outline-info"
          onClick={ (e) => handleOnClick(e) }
          aria-controls={item.id}
          aria-expanded={open}
        >
            Ver detalle
        </Button>
        <Collapse in={open}>
          <div id={item.id}>
            <ItemDetail item={itemMock} />
          </div>
        </Collapse>
      </div>
    );
}

export default ItemDetailContainer;