import GroceryList from "../../components/GroceryList/GroceryList";
import ShopList from '../../components/ShopList/ShopList';

export default function Dashboard({ user, shopItems, lists, setLists}){
    return (
        <main>
            <section className="py-5 text-center container">
                <div className="album py-5 bg-light-">
                    <div className="container">
                            <h1>Welcome to Dashboard</h1>
                            <div className="row row-cols-1 rows-cols-sm-2 row-cols-md-3 g-3">
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