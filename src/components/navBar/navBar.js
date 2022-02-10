import "./navBar.modules.css"
import { CartWidget } from './CartWidget';
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
      
    <nav className="navBar">

        <div className="titles">
            <NavLink activeClassName="activeLink" className="navTitle" exact to="/">
                INICIO
            </NavLink>
            <NavLink activeClassName="activeLink" className="navTitle" exact to="/itemList">
              TIENDA
            </NavLink>
            <NavLink activeClassName="activeLink" className="navTitle" exact to="/contact">
                CONTACTO
            </NavLink>
            <span className="inline">
            <NavLink activeClassName="activeLink" exact to="/cart" >
                <CartWidget className="carritoNav" />
            </NavLink>
            {/* numero de items que se agregan al acrrito */}
            <p>N!</p>
            </span>
        </div>
    </nav>
    )
}