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
    
    function toEdit() {
        console.log('Edit')

    }
    return (
        <div>
            <h1> Hello</h1>
            <div>
                <h2>Title: {list.listname}</h2>
                <p>Items: </p>
                 {items}  
            </div>
             {/* { showEdit ?
            <>
            <button onClick={() => setShowEdit(!showEdit)}>
                Update Details
                </button>
                    <ListsDetailPage />
                </>
                :
                <>
                    <ListUpdate />
                <button onClick={() => setShowEdit(!showEdit)}>
                Show Details
                </button>
            </>
        } */}
        </div>
    )
}