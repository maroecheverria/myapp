import './App.css';
import { useState } from 'react';
import CustomNavBar from './components/NavBar/NavBar'
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import banner from './img/banner.png';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

    return (
        <div className="App">
          <BrowserRouter>
            <CustomNavBar />
            <div style={{backgroundColor: "rgb(0, 123, 255, 0.25)"}}>
              <img src={banner} alt="banner" />
            </div>
            <Container>
              <Switch>
                <Route path="/item/:itemId">
                  <ItemDetailContainer addToCart={addToCart} cart={cart} />
                </Route>
                <Route path="/category/:categoryId">
                  <ItemList />
                </Route>
                <Route path="/cart/">
                  <Cart cart={cart} />
                </Route>
                <Route path="/about-us">
                  <AboutUs />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/">
                  <ItemListContainer />
                </Route>
              </Switch>
            </Container>
          </BrowserRouter>
        </div>

    );
};

export default App;
