import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';

export default function GroceryList({ groceryItems }){
    console.log(groceryItems)
    const groceryItemsArr = Object.entries(groceryItems)
    console.log(groceryItemsArr)
    const groceryItem = groceryItemsArr.map((item, idx) =>
        <GroceryListItem 
        key={item}
        name={item}
        />
        );
    return (
        <div className='GroceryList'>
            <h1>List of items</h1>
            {groceryItem}
        </div>
    );
}