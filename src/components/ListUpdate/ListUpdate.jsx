
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ListsDetailPage from "../../pages/ListsDetailPage/ListsDetailPage";
import * as listsAPI from "../../utilities/list-api";
import DisplayItemDetails from "../DisplayItemDetails/DisplayItemDetails";
import NewListPageItem from "../NewListPageItem/NewListPageItem";

export default function ListUpdate ( {shopItems ,lists, setLists} ) {
    // need state for update
    let { id } = useParams();
    
    const list = lists.filter((list) => list._id === id)

    const [selectedOptions, setSelectedOptions] = useState([])
    const [notSelectedOptions, setNotSelectedOptions] = useState([])
    const [listUpdate, setListUpdate] = useState({
        listname:'',
        items:[],
    });
    
    console.log(selectedOptions, "in cart")
    
    useEffect(function() {
        async function getList(id) {
            const list = lists.filter((list) => list._id === id)
            setListUpdate(...list)
        }
        getList(id);
        
    }, [lists, id]);
    
    console.log(list," my list")
// to create menu of not selected items
useEffect(function() { 
    function setItems() {
      let items = shopItems.map(item => item)
      setNotSelectedOptions(items)
    }
    setItems();
   },[shopItems]);

function addToCart(id) {
    let newItem = notSelectedOptions.filter(function(item) {
      if (item._id === id) return item
    })
    console.log(newItem)
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

const navigate = useNavigate();

const handleChange = (evt) => {
    setListUpdate({...listUpdate, [evt.target.name]: evt.target.value })
}

const handleOnSubmit = async (evt) => {
    try {
        evt.preventDefault();
        listUpdate.items = selectedOptions
        let list = await listsAPI.edit(id, listUpdate)
        console.log(listUpdate)
        setLists(list)
        navigate(-1)
    } catch (e) {
        let err = new Error(e)
        console.log(err)
    }
}

const items = list[0].items.map((item => <DisplayItemDetails key={item._id} item={item}/>))
console.log(items)

const cartList = selectedOptions.map((item, idx) => 
       <NewListPageItem item={item} key={item._id} updateCart={removeFromCart} />
       ); 
const itemList = notSelectedOptions.map((item, idx) => 
       <NewListPageItem item={item} key={item._id} updateCart={addToCart} />
       ); 

return (
    <>
    <h1>Hello Edit page</h1>
    <form onSubmit={handleOnSubmit}>
        <label>List name</label>
        <input type='text' name="listname" value={listUpdate.listname} onChange={handleChange} />
        <label>Items</label>
        {cartList}
        {/* <input type='text' name="items" value={listUpdate.items} onChange={handleChange} />
        <label>Items</label> */}
        <button>Submit Updates</button>
    </form>
    {itemList}
    </>
    )
}