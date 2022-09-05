import { useState } from "react";

export default function NewItemPage () {
    const [newItem, setNewItem] = useState({
        name: "",
        category: "",
        discription: "",
        cost: 0,
        qty: 0,
    });

    function handleAddNewItem(evt) {
        evt.preventDefault();
        //create addfuncton that goes to server
        
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
                    value={newItem.name}
                    onChange={handleChange}
                    />
                <label>Category</label>
                <input
                    value={newItem.category}
                    onChange={handleChange}
                    />
                <label>Discription</label>
                    <input
                        value={newItem.discription}
                        onChange={handleChange}
                    />
                <label>Cost</label>
                    <input
                        value={newItem.cost}
                        onChange={handleChange}
                    />
                <label>Qty</label>
                    <input
                        value={newItem.cost}
                        onChange={handleChange}
                    />
                <button type="submit"> Submit</button>
            </form>
        </>
    );
}