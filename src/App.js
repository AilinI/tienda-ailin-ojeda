import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Title } from './components/title/title';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


export const App = () =>{
  return (
    <div className="App">
      <Title />
      <NavBar />
      <ItemListContainer greeting="Holis" />
    </div>
  
  );
}
export default App