import './GroceryList.css';
import GroceryListItem from '../GroceryListItem/GroceryListItem';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function GroceryList({ shopItems: initialShopItems }){
     //typeof((shopItems)==="object") ? shopItems = Object.values(shopItems): shopItems
   
    const [shopItems, setShopItems] = useState(initialShopItems)

    useEffect(() =>{
        if (typeof initialShopItems === "object"){
            setShopItems(Object.values(initialShopItems));
        } else {
            setShopItems(initialShopItems);
        }
    },[initialShopItems]);
    
    const addItem = (newItem) => {
        setShopItems([...shopItems, newItem]);
    };
 // if (typeof shopItems === "object") {
    //     const shopItems = Object.values(shopItems);
    // } 
   

    const shopItem = shopItems.map((item, idx) =>
    <div key={item._id}>
    
        <GroceryListItem 
        name={item.name}
        />
        <Link to={``}>
            
        </Link>
    </div>
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