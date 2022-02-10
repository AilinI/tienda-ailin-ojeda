import { useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import "../ItemList/Item.modules.css"
import ItemDetail from "./ItemDetail"



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
    }, [productId])


return(

        <Fragment>
        <h2>ItemDetailContainer</h2>
        <div className="ItemDetailContainer">
          <ItemDetail product={product} />
        </div>
      </Fragment>
)
}