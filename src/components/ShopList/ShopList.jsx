import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';
import { Link, } from "react-router-dom";

export default function ShopList ({ lists, setLists, user }) {
    
    const listItem = lists.map(( item, ) => 
   <>
    <ShopItem 
        key={item._id}
        idx={item._id}
        />
        <button className="btn btn-light">
        <Link to={`/list/${item._id}`}>
         View {item.listname}
        </Link> 
        </button>
     </>
        );
     
   
    return (
        <>
        <h1 id="ShoplistTitle"> Lists </h1>
            <div className="ShopList">
                {listItem}
            </div>
        </>

    );
}