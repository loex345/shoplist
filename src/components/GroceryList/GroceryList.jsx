import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';
import { Link } from "react-router-dom";

export default function GroceryList({ shopItems }){
     //typeof((shopItems)==="object") ? shopItems = Object.values(shopItems): shopItems
     if (typeof shopItems === "object") {
        shopItems = Object.values(shopItems);
    }    
        // Convert this to array create a turney if no object exists then run shopitems as presented if not do object.keys to make array
    const shopItem = shopItems.map((item, idx) =>
    <div key={item._id}>
    
        <GroceryListItem 
        name={item.name}
        />
        <Link to={``}>
            
        </Link>
    </div>
        );
        console.log(shopItem)
    return (
        <>
         <div className='container'>
            <h1>List of items</h1>
                <div className="card shadow-sm">
                    {shopItem}
            </div>
         </div>
        </>
    );
}