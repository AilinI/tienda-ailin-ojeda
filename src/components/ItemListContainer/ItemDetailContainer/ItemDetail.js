import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);

  return (
    <div>
      <h1>ItemDetail</h1>
      <div>
        {product ? (
          <div className="ItemDetail" key={product.id}>
            <div className="ItemDetail--division1">
              <img
                className="ItemDetail--img"
                alt={product.title}
                src={product.image}
              ></img>
            </div>
            <div className="ItemDetail--division2">
              <h1 className="ItemDetail--title">{product.title}</h1>
              <div className="ItemDetail--description">
                Descripcion del Producto: {product.description}
              </div>
              <p className="ItemDetail--price">Precio: ${product.price}</p>
              <p className="ItemDetail--rate">
                {product.rating.rate} Clasificacion
              </p>
              <p>Cantidad: {count}</p>
              {showButton && (
                <ItemCount
                  stock={product.rating.count}
                  initial={1}
                  count={count}
                  setCount={setCount}
                  showButton={showButton}
                  setShowButton={setShowButton}
                />
              )}
              <Link className="ItemDetail--buttonBuy" to="/cart">
                Comprar Ahora
              </Link>
              <Link className="ItemDetail--Link" to="../itemList">
                Volver a Catalogo
              </Link>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;