import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';

export default function GroceryList({ shopItems }){
    console.log(shopItems)
    const shopItemsArr = Object.entries(shopItems)
    console.log(shopItemsArr)
    const shopItem = shopItemsArr.map((item, idx) =>
        <GroceryListItem 
        key={item}
        name={item}
        />
        );
    return (
        <div className='GroceryList'>
            <h1>List of items</h1>
            {shopItem}
        </div>
    );
}