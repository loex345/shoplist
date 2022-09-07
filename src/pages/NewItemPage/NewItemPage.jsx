import { useState } from "react";
import * as shopitemsAPI from '../../utilities/shopitem-api';

export default function NewItemPage () {
    const [newItem, setNewItem] = useState({
        name: "",
        category: "63178ae0d1d9b394b96fe304",
        discription: "",
        cost: 0,
        qty: 0,
    });

    async function handleAddNewItem(evt) {
        evt.preventDefault();
        const createItem = {...newItem}
        const item = await shopitemsAPI.newItem(createItem);
        //create addfuncton that goes to server
        setNewItem({
            name: "",
            category: "63178ae0d1d9b394b96fe304",
            discription: "",
            cost: 0,
            qty: 0,
        });
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
                    <option value="63178ae0d1d9b394b96fe304"> Produce</option>
                    <option value="63178ae0d1d9b394b96fe305"> Dry Goods</option>
                    <option value="63178ae0d1d9b394b96fe306"> Pasta</option>
                    <option value="63178ae0d1d9b394b96fe307"> Condiments</option>
                    <option value="63178ae0d1d9b394b96fe308"> General Merchandise</option>
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