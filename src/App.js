import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Title } from './components/title/title';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom" 
import Contact from './components/contact/Contact';
import Landing from './components/Landing/Landing';
import Cart from './components/cart/Cart';
import {CartProvider} from "./context/cartContex"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


export const App = () =>{
    
    return (
        <CartProvider>
        <Router>
      <div className="App">
        <Title />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/itemList">
            <ItemListContainer stock={15} initial={0}/>
          </Route>
          <Route path="/product/:productId">
            <ItemDetailContainer />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route  path="/cart">
            <Cart />
          </Route>
          </Switch>
          </div>
          </Router>
          </CartProvider>
  );
}
export default App