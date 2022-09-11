import { useParams, Link } from "react-router-dom";
import { useState } from 'react';
import ListUpdate from "../../components/ListUpdate/ListUpdate";
import DisplayItemDetails from "../../components/DisplayItemDetails/DisplayItemDetails";

export default function ListsDetailPage ({ lists, getOneList, }) {
    const [showEdit, setShowEdit] = useState(true);
    const { id } = useParams();
    const list = lists.filter((list) => list._id === id)
    console.log(list)
    const items = list[0].items.map((item => <DisplayItemDetails key={item._id} item={item}/>))
    
    return (
        <div>
            <h1> </h1>
            <div>
                <h2>Title: {list[0].listname}</h2>
                <p>Items: </p>
                 {items}  
            </div>
        </div>
    )
}