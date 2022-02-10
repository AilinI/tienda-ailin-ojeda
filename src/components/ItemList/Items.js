import "./Item.modules.css"
// import React, { useEffect, useState } from "react";

export const Items = ({
    category,
    description,
    image,
    price,
    title,
    id,
}) => {


    return(
        <section className="item">
            <Link className="" key={id} to={`/product/${id}`}>
      <div className="image">
        <img alt={title} src={image}></img>
      </div>
      <div className="">
        <p className="price">${price}</p>
        <p className="title">{title}</p>
      </div>
    </Link>
        </section>
    )
    };

export default Items
 