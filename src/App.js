import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Title } from './components/title/title';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom" 
import Contact from './components/contact/Contact';
import Landing from './components/Landing/Landing';
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemListContainer/ItemListContainer';


export const App = () =>{
  return (
    <Router>
      <div className="App">
        <Title />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/itemList">
            <ItemListContainer />
          </Route>
          <Route path="/product/:productId">
          <ItemList /> 
            <ItemDetailContainer />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App