import React from "react"
import "../Cart/Cart.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import OrderForm from "../OrderForm/OrderForm"

function Cart() {
  const { removeItem, products, totalItems, totalPrice } = useCart()

  return (
    <div className="product-block">
      {products.length > 0 ? 
        <>
          {products.map((item) => 
            <div key={item.id}>
              <div className="product-container">
                  <h1>En el carrito</h1>
                <h2>
                  {item.title} - {item.quantity} unidades
                </h2>
                <div className="total-container">
                  <h2>${item.price * item.quantity}</h2>
                </div>
                  <button
                    className="del-button"
                    onClick={() => removeItem(item)}
                  >
                    Vaciar
                  </button>
              </div>
            </div>
          )}
          <h1>
            Subtotal: ${totalPrice()} ({totalItems()} unidades)
          </h1>
  
          <div className="form-title">Ingresá tus datos para efectuar el pago.</div>

          <div className="buy-container">
            <OrderForm />
          </div>
        </>
       : 
        <>
          <h3 className="no-items">No hay productos en tu carrito.</h3>
          <Link to="/">
            <button className="back-shop">Volver a la tienda</button>
          </Link>
        </>
      }
    </div>
  )
}

export default Cart
