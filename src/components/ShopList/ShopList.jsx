import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';
import { Link, } from "react-router-dom";

export default function ShopList ({ lists, setLists, user }) {
    
    const listItem = lists.map(( item, ) => 
   <div key={item._id}>
    <ShopItem 

        //idx={item._id}
        />
        <button className="btn btn-light">
        <Link to={`/list/${item._id}`}>
         View {item.listname}
        </Link> 
        </button>
     </div>
        );
     
   
    return (
        <>
        <div className='container'>
        <h1 id="ShoplistTitle"> Lists </h1>
            <div className="card shadow-sm ShopList">
                {listItem}
            </div>
        </div>
        </>

    );
}