import { Fragment } from "react"
import "./ItemCount.modules.css"

const ItemCount = ({
  stock, 
  initial,
  count,
  setCount,
  showButton,
  setShowButton,
}) => {
    const handleClick = () => setShowButton(false);

    const restItem = () => {
        const newValue = count - 1
        if(newValue >= initial)
          setCount(newValue)
    };
  
    const sumItem = () => {
      const newValue = count + 1
      if (newValue <= stock)
          setCount(newValue)
    };

    // CREO QUE TENGO QUE CAMBIAR ESTA FUNCION PARA QUE EL ON ADD ME MANDE LOS ITEMS AL CART
    // TENDRIA QUE CAMBIAR LA ALERTA POR LA FUNCION?
    const onAdd = () => {
      const message =`Agregaste al carrito ${count} producto`;
      handleClick();
      count === 1 ? alert(message) : alert(`${message}s`);
    };
    return (
      <Fragment>
      <div className="container">
        <button onClick={restItem} className="item"> - </button>
        <span className="item" >{count}</span>
        <button onClick={sumItem} className="item"> + </button>
      </div>
      <button onClick={onAdd}>Agregar al carrito</button>
      </Fragment>
    );
    }
export default ItemCount