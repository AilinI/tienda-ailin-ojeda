import React, { Fragment, useEffect, useState } from "react";
import "./ItemList.modules.css"
import { Link } from "react-router-dom";


const ItemListContainer = () =>{
    const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    };
    getItems();
  }, []);

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