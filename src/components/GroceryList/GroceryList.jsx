import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';
import { Link, useParams } from "react-router-dom";

export default function GroceryList({ shopItems }){
    const shopItem = shopItems.map((item, idx) =>
    <>
    <GroceryListItem 
    key={item._id}
    name={item.name}
    />
    <Link to={``}>
        
    </Link>
    </>
        );
    return (
        <>
            <h1>List of items</h1>
                <div className="GroceryList">
                    {shopItem}
            </div>
        </>
    );
}