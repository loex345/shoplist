import { useState } from 'react';
import ListsDetailPage from "../ListsDetailPage/ListsDetailPage";
import ListUpdate from "../../components/ListUpdate/ListUpdate";


export default function ListUpdatePage ({ shopItems, lists, setLists, user}) {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div>

        { showEdit ?
            <>
                <ListUpdate lists={lists} setLists={setLists} shopItems={shopItems}/>
                <button type="button" className="btn btn-light m-1" onClick={() => setShowEdit(!showEdit)}>
                Show Details
                </button>
                </>
                :
                <>
                <ListsDetailPage lists={lists} setLists={setLists} user={user}/>
                <button type="button" className="btn btn-light m-1" onClick={() => setShowEdit(!showEdit)}>
                Update Details
                </button>
            </>
        }
        
       
         </div>
    )
}