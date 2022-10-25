import GroceryList from "../../components/GroceryList/GroceryList";
import ShopList from '../../components/ShopList/ShopList';
import '../Dashboard/Dashboard.css'

export default function Dashboard({ user, shopItems, lists, setLists}){
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="album py-5 bg-light-">
                            <div className="row row-cols-1 rows-cols-1">
                            <h1>Welcome to Dashboard</h1>
                            <div className="container">
                               <div className="col">
                                <ShopList lists={lists} setLists={setLists} user={user}/>
                                    <hr/>
                               </div>
                                <div className="col">
                            <GroceryList shopItems={shopItems} user={user}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}