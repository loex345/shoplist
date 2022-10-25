import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';
import { Link } from "react-router-dom";

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
         <div className='container'>
            <h1>List of items</h1>
                <div className="card shadow-sm">
                    {shopItem}
            </div>
         </div>
        </>
    );
}