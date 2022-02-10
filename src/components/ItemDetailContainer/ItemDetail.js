import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContex";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const { addItem } = useContext(CartContext)

  const handleClick = () => setShowButton(false)

  const onAdd = () => {
    addItem(product, count);
    handleClick();
  }
    return (
    <div>
      <h1>ItemDetail</h1>
      <div>
        {product ? (
          <div className="ItemDetail" key={product.id}>
            <div className="">
              <img
                className=""
                alt={product.title}
                src={product.image}
              ></img>
            </div>
            <div className="">
              <h1 className="">{product.title}</h1>
              <div className="">
                Descripcion del Producto: {product.description}
              </div>
              <p className="">Precio: ${product.price}</p>
              <p className="">
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
                  onAdd={onAdd}
                />
              )}
              <Link className="" to="/cart">
                Comprar Ahora
              </Link>
              <Link className="" to="../itemList">
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