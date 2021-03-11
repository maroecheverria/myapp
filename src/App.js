import './App.css';
import CustomNavBar from './components/NavBar'
import ItemListContainer from './components/ItemListConainer'
import { useEffect, useState } from "react";

//Frutas
import manzana from './img/products/manzana.jpg';
import pera from './img/products/pera.jpg';
import banana from './img/products/banana.jpg';
import uva from './img/products/uva.jpg';

const App = () => {

    const [items, setItems] = useState([]);

     useEffect(() => {
      new Promise((resolve, reject) => {

        setTimeout(() => {
          resolve([
            {id: 1, title: 'Manzana', price: 80, pictureUrl: manzana},
            {id: 2, title: 'Pera', price: 100.00, pictureUrl: pera},
            {id: 3, title: 'Banana', price: 80.00, pictureUrl: banana},
            {id: 4, title: 'Uva', price: 120.00, pictureUrl: uva},
          ]);
        }, 2000);

      }).then((result) => { return setItems(result); });
    });

    return (
      <div className="App">
        <CustomNavBar />
        <ItemListContainer items={items} />
      </div>
    );
};

export default App;
