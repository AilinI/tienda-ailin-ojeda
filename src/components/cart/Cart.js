import React from "react"
import ItemCount from "../ItemListContainer/ItemCount/ItemCount"
import { useState } from "react"
// import { TYPES } from "./CartActions";

const Cart =(CartItem) =>{
    const [cartItems ,setCartItems] = useState([]);
    console.log(cartItems);

    const handleCartItems = (product) => {
        setCartItems(product)
    }


    return(
        <div>
        <h2>ESTE ES EL CARRITO</h2>
        <h3>Productos seleccionados</h3>
        <h3>
            Acá debería estar el mapeo de los items seleccionados
            {/* {Items.map((Items) => <Items key={Items.id} data={Items}  /> )} */}
        </h3>
        {CartItem.lenght === 0 && (<div>El carrito está vacío</div>) }
        {/* Boton para remover todos los item del carrito */}

        <button>
            Vaciar carrito
        </button>
        </div>
    )
}

export default Cart
