import { useParams } from "react-router-dom";
export default function ListsDetailPage ({ lists, getOneList, }) {
    const { id } = useParams();
    return(
        <div>
            <h1> Hello</h1>
            <div>
                {lists.filter((list) => list._id === id)
                .map((list) => (
                <div key={list.id}>
                <h2>Title: {list.listname}</h2>
                <h2>Items: {list.items}</h2>
                </div>
                ))}
            </div>
        </div>
    );
}