import './App.css';
import CartProvider from './context/CartProvider'
import RouterApp from './RouterApp';
import { getFirestore } from "./configs/firebase";
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const db = getFirestore();
    const collection = db.collection("products");

    collection.get().then((querySnapshot) => {
      const docs = querySnapshot.docs;
      docs.map((doc) => (console.log(doc.data())));
    });

  }, []);

  return (
    <div className="App">
      <CartProvider >
        <RouterApp />
      </CartProvider>
    </div>
  );
};

export default App;
