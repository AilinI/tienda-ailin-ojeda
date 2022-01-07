import "./navBar.modules.css"

export const NavBar = () => {
    return (
    <nav className="navBar">
        <div className="navBarTitle"> 
            <h1>Flow Nocturns</h1>
        </div>

        <div className="items">
            <a className="item" href= "./public/index.html" >Inicio</a>
            <a className="item" href="https://ailini.github.io/FlowNocturns-AilinOjeda-22900/tienda.html" >Tienda</a>
            <a className="item" href="https://ailini.github.io/FlowNocturns-AilinOjeda-22900/contacto.html" >Contacto</a>
        </div>
    </nav>
    )
}