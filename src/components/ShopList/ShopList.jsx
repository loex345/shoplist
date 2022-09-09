import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';
import { Link, useParams } from "react-router-dom";


export default function ShopList ({ lists }) {
    const { id } = useParams();
    console.log(lists)
    const listItem = lists.map(( item, ) => 
    <>
    <ShopItem 
        key={item._id}
        idx={item._id}
        />
        <Link to={`/list/${item._id}`}>
        {item.listname}
        </Link>
     </>
        );
    
    return (
        <div className="ShopList">
        <h1> Recipes and Projects </h1>
        {/* <Link to={`/list/${id}`}> */}
        {listItem}
        {/* </Link> */}
        </div>

    );
}