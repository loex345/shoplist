import { useEffect } from "react";
import { useState } from "react";
import * as groceriesAPI from '../../utilities/groceries-api';

export default function Dashboard({ user }){
    // set state for all grocery items in database to print out
    const [groceryItem, setGroceryItem] = useState('')
    // create function that generates list of grocery items
 useEffect(function(){
     async function getItems(){
         const groceries = await groceriesAPI.getAll();
         setGroceryItem(groceries);
         console.log(`i am here in getItems ${groceries}`);
     }
        {
         getItems();
     }
    },[]);
    return(
        <>
        <h1>Welcome to Dashboard</h1>
        {/* <p>{groceryItem}</p> */}
        </>
    );
}