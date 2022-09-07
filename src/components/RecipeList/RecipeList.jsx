import '../../components/RecipeList/RecipeList.css'
import RecipeItem from '../RecipeItem/RecipeItem';

export default function RecipeList ({ lists }) {
    console.log(lists)
    if (typeof lists==='undefined') return;
    const listArr = Object.entries(lists)
    const listItem = listArr.map(( item, ) => 
    <RecipeItem 
        key={item}
        name={item}
        />
        );
    console.log(listItem)
    return (
        <div className="RecipeList">
        <h1> Recipes and Projects </h1>
        {listItem}
        </div>

    );
}