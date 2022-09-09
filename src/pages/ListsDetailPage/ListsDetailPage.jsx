import { useParams } from "react-router-dom";
import DisplayItemDetails from "../../components/DisplayItemDetails/DisplayItemDetails";

export default function ListsDetailPage ({ lists, getOneList, }) {
    const { id } = useParams();
    const list = lists.filter((list) => list._id === id)
    console.log(list)
    const items = list[0].items.map((item => <DisplayItemDetails key={item._id} item={item}/>))
    return (
        <div>
            <h1> Hello</h1>
            <div>
                <h2>Title: {list.listname}</h2>
                <p>Items: </p>
                {items}  
            </div>
        </div>
    )
}