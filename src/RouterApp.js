import CustomNavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Payment from "./components/Checkout/Payment";
import NotFoundPage from "./components/Pages/NotFoundPage";
import Banner from "./components/Banner/Banner";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <CustomNavBar />
      <Banner />
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
          <Route path="/payment/:orderId">
            <Payment />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="*" >
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default RouterApp;
