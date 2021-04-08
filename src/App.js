import './App.css';
import CartProvider from './context/CartProvider'
import RouterApp from './RouterApp';

const App = () => {

  return (
    <div className="App">
      <CartProvider >
        <RouterApp />
      </CartProvider>
    </div>
  );
};

export default App;
