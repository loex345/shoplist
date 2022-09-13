import { useParams } from "react-router-dom";
import { useState } from 'react';
import DisplayItemDetails from "../../components/DisplayItemDetails/DisplayItemDetails";
import * as commentAPI from "../../utilities/comment-api";
import DisplayComments from "../../components/DisplayComments/DisplayComments";


export default function ListsDetailPage ({ lists, getOneList, setLists }) {
    const [addComment, setAddComment] = useState({
        content:"",
        budgetamt:0,
    });
    const { id } = useParams();
    const list = lists.filter((list) => list._id === id)
    const items = list[0].items.map((item => <DisplayItemDetails key={item._id} item={item}/>))
    const comments = list[0].comments.map((val, idx) => <DisplayComments key={val[idx]} comment={val}/>)

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
        <div>
            <h1> Lists Detail </h1>
            <div>
                <h2>Title: {list[0].listname}</h2>
                <p>Items: </p>
                 {items}  
            </div>
                {comments}
            <h2> New Comment </h2>
            <form onSubmit={handleAddCommentItem}>
                {/* content budgetamt user */}
                <label> Content Area</label>
                <textarea name="content" value={addComment.content} onChange={handleChange}></textarea>
                <label> Budget Amt</label>
                <input name="budgetamt" value={addComment.budgetamt} onChange={handleChange}/>
                <button type="submit"> Add comment</button>
            </form>
        </div>
    )
}