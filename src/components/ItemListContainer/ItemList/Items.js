import "./Item.modules.css"
export const Items = ({
    category,
    description,
    image,
    price,
    title,
    id,
}) => {
    return(
        <section className="section">
        <div className="item">
            <h2 className="title">{title}</h2>
            <img className="image" src={image} alt="Imagen del producto"/>
            <span className="data">
                <p className="price">${price}</p>
            </span>
            <p className="description">{description}</p>
            <p className="category">{category}</p>
        </div>
        </section>
    )
    };

export default Items
 