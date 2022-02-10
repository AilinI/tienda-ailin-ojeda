  
import { createContext, useState } from "react";

const initialCartContext = [];

export const CartContext = createContext(initialCartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      let copyCartItems = [...cartItems];
      let match = copyCartItems.find((item) => item.id === product.id);
      let idx = copyCartItems.indexOf(match);
      copyCartItems[idx].quantity = copyCartItems[idx].quantity + quantity;
      setCartItems(copyCartItems);
    } else {
      const copyProduct = { ...product };
      copyProduct.quantity = quantity;
      setCartItems([...cartItems, copyProduct]);
    }

    const sumItem = product.price * quantity;
    setTotal(total + sumItem);
  };

  const removeItem = (id, quantity, price) => {
    const remove = cartItems.filter((item) => item.id !== id);
    setCartItems(remove);
    const restItem = quantity * price;
    setTotal(total - restItem);
  };

  const clear = () => {
    setCartItems(initialCartContext);
    setTotal(0);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};