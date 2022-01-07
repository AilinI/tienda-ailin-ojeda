import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Title } from './components/title/title';

export const App = () =>{
  return (
    <div className="App">
      <NavBar />
      <Title />
    </div>
  
  );
}
export default App