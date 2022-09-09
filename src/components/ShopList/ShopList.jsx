import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import * as listsAPI from '../../utilities/list-api';

export default function ShopList ({ lists, setLists }) {
    const { id } = useParams();
    const [newList, setNewList] = useState(...lists);
    
    async function handleRemove(id) {
       let allLists = await listsAPI.deleteOneList(id);
        setLists(allLists)
    }

    const listItem = lists.map(( item, ) => 
    <>
    <ShopItem 
        key={item._id}
        idx={item._id}
        />
        <Link to={`/list/${item._id}`}>
        {item.listname}
        </Link>
        <button type="button" onClick={() => handleRemove(item._id)}>Delete</button> 
     </>
        );
    
    return (
        <div className="ShopList">
        <h1> Recipes and Projects </h1>
        {/* <Link to={`/list/${id}`}> */}
        {listItem}
        {/* </Link> */}
        </div>

    );
}