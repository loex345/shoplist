import { useParams } from "react-router-dom";
export default function ListsDetailPage ({ lists, getOneList, }) {
    const { id } = useParams();
    console.log(id)
    return(
        <div>
            <h1> Hello</h1>
            <div>
                {lists.filter((list) => list._id === id)
                .map((list) => (
                <div key={list.id}>
                <h2>Title: {list.listname}</h2>
                <p>Items: {list.items}</p>  
                {/* //use populate to get the name properties */}
                </div>
                ))}
            </div>
        </div>
    );
}