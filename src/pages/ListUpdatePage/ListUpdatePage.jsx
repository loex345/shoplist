import { useState } from 'react';
import ListsDetailPage from "../ListsDetailPage/ListsDetailPage";
import ListUpdate from "../../components/ListUpdate/ListUpdate";
import { useParams } from 'react-router-dom';

export default function ListUpdatePage ({ shopItems, lists, setLists}) {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div>

        { showEdit ?
            <>
            <ListUpdate lists={lists} setLists={setLists} shopItems={shopItems}/>
        <button type="button" onClick={() => setShowEdit(!showEdit)}>
            Show Details
        </button>
            </>
            :
            <>
            <ListsDetailPage lists={lists} />
            <button type="button" onClick={() => setShowEdit(!showEdit)}>
            Update Details
            </button>
            </>
        }
        
       
         </div>
    )
}