import { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as shopitemsAPI from '../../utilities/shopitem-api';

export default function NewItemPage ({setShopItems}) {
    const [newItem, setNewItem] = useState({
        name: "",
        category: "",
        discription: "",
        cost: 0,
        qty: 0,
    });

    const navigate = useNavigate();

    async function handleAddNewItem(evt) {
        evt.preventDefault();
        const createItem = {...newItem}
        const item = await shopitemsAPI.newItem(createItem);
        setShopItems(prevItems =>[...prevItems,item] )
        navigate('/dashboard')        
        setNewItem({
            name: "",
            category: "",
            discription: "",
            cost: 0,
            qty: 0,
        });
        
    }

    function handleChange(evt) {
        setNewItem({
            ...newItem,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <>
        <div className="d-flex justify-content-center">
            <h1>New Item Page</h1>
            </div>
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
                    <option value="Produce"> Produce</option>
                    <option value="Dry Goods"> Dry Goods</option>
                    <option value="Pasta"> Pasta</option>
                    <option value="Condiments"> Condiments</option>
                    <option value="General Merchandise"> General Merchandise</option>
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
                    onChange={handleChange}
                    />
                <label>Qty</label>
                <input
                    type="number"
                    name="qty"
                    value={newItem.qty}
                    onChange={handleChange}
                    />
                <button type="submit" className="btn btn-light"> Submit</button>
            </form>
        </>
    );
}