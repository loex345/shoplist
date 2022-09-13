import GroceryList from "../../components/GroceryList/GroceryList";
import ShopList from '../../components/ShopList/ShopList';

export default function Dashboard({ user, shopItems, lists, setLists}){
    return(
        <main>
        <h1>Welcome to Dashboard</h1>
        <ShopList lists={lists} setLists={setLists} user={user}/>
        <GroceryList shopItems={shopItems} user={user}/>
        </main>
    );
}