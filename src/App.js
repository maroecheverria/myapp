import './App.css';
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
import CartProvider from './context/CartProvider'

const App = () => {

    return (
        <div className="App">
          <BrowserRouter>
          <CartProvider >
            <CustomNavBar />
            <div style={{backgroundColor: "rgb(0, 123, 255, 0.25)"}}>
              <img src={banner} alt="banner" />
            </div>
            <Container>
              <Switch>
                <Route path="/item/:itemId">
                  <ItemDetailContainer />
                </Route>
                <Route path="/category/:categoryId">
                  <ItemList />
                </Route>
                <Route path="/cart/">
                  <Cart />
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
          </CartProvider>
          </BrowserRouter>
        </div>

    );
};

export default App;
