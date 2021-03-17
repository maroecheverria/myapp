import './App.css';
import CustomNavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListConainer'

const App = () => {

    return (
      <div className="App">
        <CustomNavBar />
        <ItemListContainer />
      </div>
    );
};

export default App;
