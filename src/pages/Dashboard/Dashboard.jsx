import { useEffect } from "react";
import { useState } from "react";
import GroceryList from "../../components/GroceryList/GroceryList";
import * as shopitemsAPI from '../../utilities//shopitem-api';
import * as listsAPI from '../../utilities/list-api';
import ShopList from '../../components/ShopList/ShopList';

export default function Dashboard({ user }){
    // set state for all grocery items in database to print out
    const [shopItems, setShopItems] = useState('')
    const [lists, setLists] = useState('')
    // create function that generates list of grocery items
 useEffect(function() { 
     async function getItems(){
         const shopItem = await shopitemsAPI.getAll();
         const lists = await listsAPI.getAll();
         setShopItems(shopItem);
         setLists(lists);
         console.log(`i am here in getItems gitems ${shopItem}`);
         console.log(`i am here in getItems Lists ${lists}`);
     }
        {
         getItems();
     }
    },[]);
console.log(`${lists}`)
    return(
        <main>
        <h1>Welcome to Dashboard</h1>
        <GroceryList shopItems={shopItems} />
        <ShopList lists={lists} />
        </main>
    );
}