import ItemCount from './ItemCount';
import ItemList from './ItemList/ItemList';

function ItemListContainer(props) {
    console.log(props)
    return (
        <div>
        <p>{props.greeting}</p>
        <ItemList />
        <ItemCount initial={0} stock={5}/>
        </div>
    )
    
}

export default ItemListContainer