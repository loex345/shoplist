import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';

export default function ShopList ({ lists }) {
    const listItem = lists.map(( item, ) => 
    <ShopItem 
        key={item._id}
        name={item.listname}
        />
        );
    return (
        <div className="ShopList">
        <h1> Recipes and Projects </h1>
        {listItem}
        </div>

    );
}