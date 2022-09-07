import '../../components/ShopList/ShopList.css'
import ShopItem from '../ShopItem/ShopItem';

export default function ShopList ({ lists }) {
    console.log(lists)
    if (typeof lists==='undefined') return;
    const listArr = Object.entries(lists)
    const listItem = listArr.map(( item, ) => 
    <ShopItem 
        key={item}
        name={item}
        />
        );
    console.log(listItem)
    return (
        <div className="ShopList">
        <h1> Recipes and Projects </h1>
        {listItem}
        </div>

    );
}