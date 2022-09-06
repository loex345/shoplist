import { useEffect } from "react";
import { useState } from "react";
import GroceryList from "../../components/GroceryList/GroceryList";
import * as groceriesAPI from '../../utilities/groceries-api';
import * as listsAPI from '../../utilities/list-api';
import RecipeList from '../../components/RecipeList/RecipeList';

export default function Dashboard({ user }){
    // set state for all grocery items in database to print out
    const [groceryItems, setGroceryItems] = useState('')
    const [lists, setLists] = useState('')
    // create function that generates list of grocery items
 useEffect(function(){
     async function getItems(){
         const groceries = await groceriesAPI.getAll();
         const lists = await listsAPI.getAll();
         setGroceryItems(groceries);
         setLists(lists);
         console.log(`i am here in getItems gitems ${groceries}`);
         console.log(`i am here in getItems Lists ${lists}`);
     }
        {
         getItems();
     }
    },[]);

    return(
        <main>
        <h1>Welcome to Dashboard</h1>
        <GroceryList groceryItems={groceryItems} />
        <RecipeList recipes={lists} />
        </main>
    );
}