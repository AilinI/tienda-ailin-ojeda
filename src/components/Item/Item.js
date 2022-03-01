import React from "react"
import "../Item/Item.css"
import { Link } from "react-router-dom"

function Item({ title, price, pictureUrl, id }) {
  return (
    <div className="items-category-container">
      <div className="item">
        <div className="title">{title}</div>
        <Link to={`/item/${id}`}>
        <div
          style={{ backgroundImage: `url(${pictureUrl})` }}
          className="img">
        </div>
        </Link>
        <div className="price">${price}</div>
        <div className="button-container">
          <Link to={`/item/${id}`}>
            <button className="button">Comprar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item
