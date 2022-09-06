import { useState } from "react";
import * as groceriesAPI from '../../utilities/groceries-api';

export default function NewItemPage () {
    const [newItem, setNewItem] = useState({
        name: "",
        category: "produce",
        discription: "",
        cost: 0,
        qty: 0,
    });

async function handleAddNewItem(evt) {
        evt.preventDefault();
        const createItem = {...newItem}
        const item = await groceriesAPI.addItem(createItem);
        //create addfuncton that goes to server
        setNewItem(item);
        console.log(item)
        
    }

    function handleChange(evt) {
        setNewItem({
            ...newItem,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <>
            <h1>New Item Page</h1>
            <span></span>
            <span></span>
            <form onSubmit={handleAddNewItem}>
                <label>Item name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="New Item"
                    value={newItem.name}
                    onChange={handleChange}
                    required
                    />
                <label>Category</label>
                <select
                    name="category"
                    value={newItem.category}
                    onChange={handleChange}>
                    <option value="produce"> Produce</option>
                    <option value="dryGood"> Dry Goods</option>
                    <option value="pasta"> Pasta</option>
                    <option value="condiments"> Condiments</option>
                    <option value="generalmerchandise"> General Merchandise</option>
                </select>
                <label>Discription</label>
                <textarea
                    name="discription"
                    value={newItem.discription}
                    onChange={handleChange}
                >
                </textarea>
                <label>Cost</label>
                <input
                    type="number"
                    name="cost"
                    value={newItem.cost}
                    defaultValue='0'
                    onChange={handleChange}
                />
                <label>Qty</label>
                <input
                    type="number"
                    name="qty"
                    value={newItem.qty}
                    defaultValue='0'
                    onChange={handleChange}
                />
                <button type="submit"> Submit</button>
            </form>
        </>
    );
}