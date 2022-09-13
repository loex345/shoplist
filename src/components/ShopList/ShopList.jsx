import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';
import { Link, } from "react-router-dom";

import * as listsAPI from '../../utilities/list-api';

export default function ShopList ({ lists, setLists, user }) {
    // const { id } = useParams();
    // const [newList, setNewList] = useState(...lists);
    
    async function handleRemove(id) {
       let allLists = await listsAPI.deleteOneList(id);
        setLists(allLists)
    }
  
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
        {user._id === item.user._id ? 
    
        <button type="button" className="btn btn-primary btn-sm" onClick={() => handleRemove(item._id)}>Delete {item.listname}</button> 
        : 
        ''
        } 
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