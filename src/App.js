import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Title } from './components/title/title';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom" 
import Contact from './components/contact/Contact';
import Landing from './components/Landing/Landing';
import { Product } from './components/ItemListContainer/ItemDetail/ItemDetail';


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
            <ItemListContainer/>
          </Route>
          <Route path="/product/:productId">
            <Product />
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