import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';

export default function GroceryList({ shopItems }){
    const shopItem = shopItems.map((item, idx) =>
        <GroceryListItem 
        key={item._id}
        name={item.name}
        />
        );
    return (
        <div className='GroceryList'>
            <h1>List of items</h1>
            {shopItem}
        </div>
    );
}