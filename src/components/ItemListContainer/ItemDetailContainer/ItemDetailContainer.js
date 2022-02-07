import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';
import "../ItemList/Item.modules.css"



export const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        const getProduct = async () =>{
        try {
            const response = await fetch(
                `https://fakestoreapi.com/products/${productId}`
            )
            const data = await response.json()
            setProduct(data)
        } catch(error) {
            console.log(error)
        }
    }
    getProduct()
}, [])

return(
    <div>
        { product ? (
        <section>
            <h1>{product.title}</h1>
            <img src={product.image} className="image" alt="Imagen del Producto"></img>
            <p>{product.description}</p>
                <span className="data">
                    <p className="price">${product.price}</p>
                  </span>
                  <ItemCount initial={0} stock={5}/>
         </section>
        ):
        (
            <p>Cargando Producto...</p>
        )}
    </div>
)}