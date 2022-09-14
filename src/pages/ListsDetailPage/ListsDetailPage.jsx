import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import DisplayItemDetails from "../../components/DisplayItemDetails/DisplayItemDetails";
import * as commentAPI from "../../utilities/comment-api";
import * as listsAPI from '../../utilities/list-api';
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import "../ListsDetailPage/ListsDetailPage.css"

export default function ListsDetailPage ({ lists, setLists, user }) {
    const [addComment, setAddComment] = useState({
        content:"",
        budgetamt:0,
    });

    const { id } = useParams();
    const list = lists.filter((list) => list._id === id)
    const items = list[0].items.map((item => <DisplayItemDetails key={item._id} item={item}/>))
    const comments = list[0].comments.map((val, idx) => <DisplayComments key={val[idx]} comment={val}/>)
    
    const navigate = useNavigate();

    async function handleRemove(id) {
        let allLists = await listsAPI.deleteOneList(id);
        navigate('/dashboard')
         setLists(allLists)
     }

    async function handleAddCommentItem(evt) {
        evt.preventDefault();
        let id=list[0]._id
        const createComment = {...addComment}
        const comment = await commentAPI.newComment(createComment, id);
        setLists(comment)
        setAddComment({
            content: "",
            budgetamt: 0,
        })

    }

    function handleChange(evt) {
        setAddComment({
            ...addComment,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <>
        <h1> Lists Detail </h1>
        <div>
            <h2>Title: {list[0].listname}</h2>
                <h3>Items to Purchase: </h3>
                <div className="ListsDetailPage" id="itemsColor">
                 {items}  
                </div>
            <h3> Comments
            {comments}
            </h3>
        </div>
            <h2> New Comment </h2>
            <form onSubmit={handleAddCommentItem} className="ListsDetailPage">
                {/* content budgetamt user */}
                <textarea name="content" value={addComment.content} onChange={handleChange}>Comment Box</textarea>
                <button type="submit" className="btn btn-light"> Add comment</button>
            </form>
            <span></span>
        {user._id === list[0].user._id ? 
        <button type="button" className="btn btn-light btn-sm" onClick={() => handleRemove(id)}>Delete {list.listname}</button> 
        : 
        <em> You are not the creator of this List</em>
        } 
        </>
    )
}