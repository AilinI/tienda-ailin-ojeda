import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(0);

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
  
    const onAdd = () => {
      const message =`Agregaste al carrito ${count} producto`
      count === 1 ? alert(message) : alert(`${message}s`);
    };
  
    return (
      <div>
      <div className="container">
        <button onClick={restItem} className="item">- 1</button>
        <span className="item" >{count}</span>
        <button onClick={sumItem} className="item">+ 1</button>
      </div>
      <button onClick={onAdd}>Agregar al carrito</button>
      </div>
    );

//     const addOne = () => {
//         const addResult = count + 1;
//         if (addResult<= initial)
//         setCount ({addResult})
//     };
    
//     return(
//         <div>
//         <button onClick={addOne}>Contador</button>
//         <h3>{count}</h3>
//         </div>
//     )

// }
    }
export default ItemCount