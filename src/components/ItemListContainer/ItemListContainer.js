import ItemCount from './ItemCount';

function ItemListContainer(props) {
    console.log(props)
    return (
        <div>
        <p>{props.greeting}</p>
        <ItemCount initial={0} stock={5}/>
        </div>
    )
    
}

export default ItemListContainer