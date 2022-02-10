import React, { Fragment, useEffect, useState } from "react";
import "./ItemList.modules.css"
import { Link } from "react-router-dom";
// import ItemCount from "./ItemCount/ItemCount";



const ItemListContainer = ({stock, initial}) =>{
    const [items, setItems] = useState();
    const [count, setCount] = useState(0);
    

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    };
    getItems();
  }, []);

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
//tendria que modificr esta funcion para poder agregarlo a la vista del carrito
const handleAddItem = () => {
  const message =`Agregaste al carrito ${count} producto`
  count === 1 ? alert(message) : alert(`${message}s`);
};

  return (
    <div>
        <section  className="products">
          <h1 className="titleSection">TIENDA</h1>
          {items ?(
            <Fragment>
            {items.map((items) => (
              <div className="item" key={items.id}>
                  <h2 className="title">{items.title}</h2>
                  <img className="image" src={items.image} alt="Imagen del producto"/>
                  <span className="data">
                    <p className="price">${items.price}</p>
                  </span>
                  <div>
                    <div className="container">
                      <button onClick={restItem} className="item"> - </button>
                      <span className="item" >{count}</span>
                      <button onClick={sumItem} className="item"> + </button>
                    </div>
                    <button onClick={handleAddItem}>Agregar al carrito</button>
                </div>
                <Link to={`/product/${items.id}`}> Ver detalles </Link>
              </div>
            ))}
            </Fragment>
          ): (<p> Cargando Productos </p>) 
          }
        </section>
    </div>
  );
};


export default ItemListContainer