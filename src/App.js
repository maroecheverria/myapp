import './App.css';
import CustomNavBar from './components/NavBar'
import ItemListContainer from './components/ItemListConainer'
import {Component} from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavBar />
        <ItemListContainer greeting="Saludos!" />
      </div>
    );
  }
};

export default App;
