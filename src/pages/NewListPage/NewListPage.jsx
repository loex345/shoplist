import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import * as listsAPI from '../../utilities/list-api'
import NewListPageItem from '../../components/NewListPageItem/NewListPageItem';
import "../NewListPage/NewListPage.css"

export default function NewListPage( {shopItems, lists, setLists} ) {

  useEffect(function() { 
    function setItems() {
      let items = shopItems.map(item => item)
      setNotSelectedOptions(items)
    }
    setItems();
   },[shopItems]);
  
  const [selectedOptions, setSelectedOptions] = useState([])
  const [notSelectedOptions, setNotSelectedOptions] = useState([])
  const [newList, setNewList] = useState({
    listname: "", 
    items:[]
 
  });

  function addToCart(id) {
    let newItem = notSelectedOptions.filter(function(item) {
      if (item._id === id) return item
    })

    setSelectedOptions([...selectedOptions, newItem[0]])

    let newOptions = notSelectedOptions.map(item => item)

    let filteredOptions = newOptions.filter(function(item) {
      if (item._id !== id) return item
    })
    setNotSelectedOptions(filteredOptions) 
  }

  function removeFromCart(id) {
    let newItem = selectedOptions.filter(function(item){
      if (item._id === id) return item
    })
    setNotSelectedOptions([...notSelectedOptions, newItem[0]])
    let newOptions = selectedOptions.map(item => item)
    let filteredOptions = newOptions.filter(function(item){
      if (item._id !== id) return item
    })
    setSelectedOptions(filteredOptions)
    
  }
  function handleChange(evt) {
    setNewList({...newList,[evt.target.name]: evt.target.value });
  }

  const navigate = useNavigate();

  async function handleAddNewList(evt) {
    evt.preventDefault();
    newList.items = selectedOptions
    const createList = {...newList}
    const allLists = await listsAPI.newList(createList);
    setLists(allLists)
    navigate('/dashboard')
    setNewList({
      listname: "",
      items:[]
    })
  }
  
  const cartList = selectedOptions.map((item, idx) => 
       <NewListPageItem item={item} key={item._id} updateCart={removeFromCart} />
       ); 
   const itemList = notSelectedOptions.map((item, idx) => 
       <NewListPageItem item={item} key={item._id} updateCart={addToCart} />
       ); 

  return (
  <>
    <div className="d-flex justify-content-center">
    <h1>New List Page</h1>
    </div>
    <form onSubmit={handleAddNewList}>
      <label> Shopping List Name</label>
      <input
      name="listname"
      value={newList.listname}
      type="text"
      onChange={handleChange}
      required
      />
      <h1>
       My Items 
      </h1>
      <div id="cart">
        {cartList}
      </div>
      <button type="submit" className="btn btn-light">Submit List</button>
    </form>
    <div className="d-flex justify-content-center">
      <h1>Items available for list</h1>
    </div>
    <div id="item">
    {itemList}
    </div>
    </>

  );
}