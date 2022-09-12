import { useEffect } from "react";
import { useState } from "react";
import GroceryList from "../../components/GroceryList/GroceryList";

import ShopList from '../../components/ShopList/ShopList';

export default function Dashboard({ user, shopItems, lists, setLists}){
   console.log(user)
    return(
        <main>
        <h1>Welcome to Dashboard</h1>
        <GroceryList shopItems={shopItems} user={user}/>
        <ShopList lists={lists} setLists={setLists} user={user}/>
        </main>
    );
}