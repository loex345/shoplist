import { useEffect } from "react";
import { useState } from "react";
import GroceryList from "../../components/GroceryList/GroceryList";
import * as groceriesAPI from '../../utilities/groceries-api';

export default function Dashboard({ user }){
    // set state for all grocery items in database to print out
    const [groceryItems, setGroceryItems] = useState('')
    // create function that generates list of grocery items
 useEffect(function(){
     async function getItems(){
         const groceries = await groceriesAPI.getAll();
         setGroceryItems(groceries);
         console.log(`i am here in getItems ${groceries}`);
     }
        {
         getItems();
     }
    },[]);
    return(
        <main>
        <h1>Welcome to Dashboard</h1>
        <GroceryList groceryItems={groceryItems} />
        </main>
    );
}