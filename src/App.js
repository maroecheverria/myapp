import './App.css';
import CustomNavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <div className="App">
          <BrowserRouter>
            <CustomNavBar />

            <Switch>
              <Route path="/item/:id">
                <Item />
              </Route>
              <Route path="/category/:id">
                <ItemList />
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

          </BrowserRouter>
        </div>

    );
};

export default App;
