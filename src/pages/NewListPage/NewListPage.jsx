import { useState, useEffect } from 'react';
import * as listsAPI from '../../utilities/list-api'
import * as shopitemsAPI from '../../utilities//shopitem-api';
import ShopItem from '../../components/ShopItem/ShopItem';
import GroceryListItem from '../../components/GroceryListItem/GroceryListItem';
import NewListPageItem from '../../components/NewListPageItem/NewListPageItem';

export default function NewListPage() {
  const [shopItems, setShopItems] = useState('')

  const [newList, setNewList] = useState({
    category: "",
    recipename: "", 
    listname: "", 
    item:""
  })

  

  function handleChange(evt){
    setNewList({
      ...newList,
      [evt.target.name]: evt.target.value
    });
  }


  async function handleAddNewList(evt) {
    evt.preventDefault();
    const createList = {...newList}
    const list = await listsAPI.newList(createList);
    setNewList({
      category: "63178ae0d1d9b394b96fe304",
      recipename: "", 
      listname: "",
      item:"", 
    })
  }
  // render list of current items
  useEffect(function() { 
    async function getItems(){
        const shopItem = await shopitemsAPI.getAll();      
        setShopItems(shopItem);
        console.log(`i am here in getItems gitems ${shopItem}`);
    }
       {
        getItems();
    }
   },[]);
   // map new items 
   const itemList = Object.entries(shopItems).map((item, idx) => 
       <NewListPageItem name={item} />
       ); 
    console.log(itemList)
  // map out the id render that in a option list using a loop then provide that as item to be used
  return (
    <>
    <h1>New List Page</h1>
    <form onSubmit={handleAddNewList}>
      <label> List Name</label>
      <input
      name="listname"
      value={newList.listname}
      type="text"
      onChange={handleChange}
      />
      <label> Items </label>
      <select
      name="item" 
      onChange={handleChange}
      value={newList.item}
      >
      {itemList}
      </select>
      <label>Category</label>
      <select
          name="category"
          value={newList.category}
          onChange={handleChange}>
          <option value="63178ae0d1d9b394b96fe304"> Produce</option>
          <option value="63178ae0d1d9b394b96fe305"> Dry Goods</option>
          <option value="63178ae0d1d9b394b96fe306"> Pasta</option>
          <option value="63178ae0d1d9b394b96fe307"> Condiments</option>
          <option value="63178ae0d1d9b394b96fe308"> General Merchandise</option>
      </select>
      <label>Recipe Name (optional)</label>
      <input
        name="recipename"
        value={newList.recipename}
        type="text"
        onChange={handleChange}
      />
      <button type="submit">Submit List</button>
    </form>
    </>

  );
}