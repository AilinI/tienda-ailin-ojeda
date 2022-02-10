import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/cartContex";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeItem, clear, total } = useContext(CartContext);
    const subTotal = (price, quantity) => {
      const subTotalPrice = price * quantity;
      return subTotalPrice.toFixed(2);
    };
    return (
      <>
        <h1>Estas en Cart</h1>
        <div className="">
          <Link className="" to="../itemList">
            Volver a Catalogo
          </Link>
        </div>
        {cartItems.map((item) => (
          <div className="cartContain" value={item.id}>
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="">
              <p>{item.title}</p>
              <p>$ {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeItem(item.id, item.price, item.quantity)}
              className=""
            >
              Remove
            </button>
            <div>${subTotal(item.price, item.quantity)}</div>
          </div>
        ))}
        {total !== 0 ? (
          <div className="">
            <button onClick={() => clear()} className="">
              Remover Todos
            </button>
            <div className="">Total: ${total.toFixed(2)} </div>
            <button className="">Terminar Compra</button>
          </div>
        ) : (
          <p className="">El carrito se encuentra vacio...</p>
        )}
      </>
    );
  };

export default Cart
