import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Title } from './components/title/title';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" 
import Contact from './components/contact/Contact';
import Landing from './components/Landing/Landing';


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
          <Route path="/products">
          <ItemListContainer greeting="HOLIS" />
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