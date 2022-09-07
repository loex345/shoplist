import { useState } from 'react';
import * as listsAPI from '../../utilities/list-api'

export default function NewListPage() {

  const [newList, setNewList] = useState({
    category: "",
    recipename: "", 
    listname: "", 
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
    })
  }

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
      <label>Add Items</label>
      <input
      name="item"
      value={newList.item}
      type="text"
      onChange={handleChange}
      />
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