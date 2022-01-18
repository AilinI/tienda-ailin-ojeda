import React, { useEffect, useState } from "react";
import Items from "./Item.js";
import "./ItemList.modules.css"
const ItemList = () =>{
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
    <div className="container">
        <section className="products">
          <h1 className="titleSection">TIENDA</h1>
          {items ? (
            items.map((items) => <Items {...items} />)
          ) : (
            <p>Cargando productos...</p>
          )}
        </section>
      )
    </div>
  );
};


export default ItemList