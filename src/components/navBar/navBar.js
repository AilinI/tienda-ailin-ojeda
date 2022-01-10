import "./navBar.modules.css"
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return (
      
    <nav className="navBar">

        <div className="items">
            <a className="item" href= "./public/index.html" >Inicio</a>
            <a className="item" href="https://ailini.github.io/FlowNocturns-AilinOjeda-22900/tienda.html" >Tienda</a>
            <a className="item" href="https://ailini.github.io/FlowNocturns-AilinOjeda-22900/contacto.html" >Contacto</a>
            <CartWidget className="carritoNav" />
        </div>
        {/* <div className="carritoNav">
            <CartWidget  />
        </div> */}
    </nav>
    )
}