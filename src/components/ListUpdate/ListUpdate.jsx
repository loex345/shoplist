
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ListsDetailPage from "../../pages/ListsDetailPage/ListsDetailPage";
import * as listAPI from "../../utilities/list-api";


export default function ListUpdate ( {lists} ) {
    // need state for update
    let { id } = useParams();

    const [listUpdate, setListUpdate] = useState({
        listname: '',
    });


useEffect(function() {
    async function getList(id) {
        const list = lists.filter((list) => list._id === id)
        setListUpdate(...list)
    }
    getList(id);

}, [lists, id]);

const navigate = useNavigate();

const handleChange = (evt) => {
    setListUpdate({...listUpdate, [evt.target.name]: evt.target.value })
}

const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    console.log(listUpdate)
    let list = await listAPI.edit(id, listUpdate)
    setListUpdate(list)
}

// use listUpdate.map to create list of buttons from server

return (
    <>
    <h1>Hello Edit page</h1>
    <form onSubmit={handleOnSubmit}>
        <label>List name</label>
        <input type='text' name="listname" value={listUpdate.listname} onChange={handleChange} />
        <label>Items</label>
        {/* <input type='text' name="items" value={listUpdate.items} onChange={handleChange} />
        <label>Items</label> */}
        <button>Submit Updates</button>
    </form>
    </>
    )
}